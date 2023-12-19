import * as TypeGraphQL from 'type-graphql'
import type { GraphQLResolveInfo } from 'graphql'
import { CreateOneWorkingListArgs, WorkingList } from '../../@generated'
import {
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
  transformInfoIntoPrismaArgs,
} from '../../@generated/helpers'
import { Context } from '../../context'
import { PrismaClient } from '@prisma/client'
import { exec } from 'child_process'
import { generateWorkList, modalitiesTypes } from '../../Utils/DICOM/utils'
import { format } from 'date-fns'

@TypeGraphQL.Resolver((_of) => WorkingList)
export class CreateOneWorkingListResolver {
  @TypeGraphQL.Mutation((_returns) => WorkingList, {
    nullable: false,
  })
  async createOneWorkingList(
    @TypeGraphQL.Ctx() ctx: Context,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateOneWorkingListArgs,
  ): Promise<WorkingList> {
    const { _count } = transformInfoIntoPrismaArgs(info)

    const prisma = getPrismaFromContext(ctx) as PrismaClient
    try {
      const workingList = await prisma.workingList.create({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      })

      const [patient, user, clinicalEvent, modality] = await Promise.all([
        prisma.patient.findUnique({
          where: { id: workingList.patientId },
        }),
        prisma.user.findUnique({ where: { id: workingList.userId } }),
        prisma.clinicalEvent.findUnique({
          where: { id: workingList.clinicalEventId },
        }),
        prisma.modality.findUnique({ where: { id: workingList.modalityId } }),
      ])

      if (workingList && patient && user && clinicalEvent && modality) {
        generateWorkList({
          id: workingList.id,
          data: {
            AccessionNumber: workingList.id,
            PatientID: workingList.patientId,
            PatientsBirthDate: format(patient.ddn, 'yyyyMMdd'),
            PatientsName: `${patient.lastName}^${patient.firstName}`,
            PatientsSex: patient.sexe ?? 'O',
            ReferringPhysiciansName: `${user.lastName}^${user.firstName}`,
            ScheduledProcedureStepSequence: {
              Modality: modalitiesTypes.find(
                (m) => m.eventType === clinicalEvent.eventType,
              )!.type,
              ScheduledProcedureStepStartDate: format(new Date(), 'yyyyMMdd'),
              ScheduledStationAETitle: modality.modalityAETitle,
              ScheduledPerformingPhysiciansName: `${user.lastName}^${user.firstName}`,
              ScheduledStationName: modality.modalityPseudo ?? '',
            },
            PatientsSizeInMeters: patient.height
              ? patient.height.toString()
              : '',
            PatientsWeightInKg: patient.weight ? patient.weight.toString() : '',
            PatientsAddress: patient.address ?? '',
            RequestingPhysician: `${user.lastName}^${user.firstName}`,
          },
        })
        exec(
          `docker run --rm -v ./worklists:/var/local imbio/dcmtk dump2dcm /var/local/${workingList.id}.txt /var/local/${workingList.id}.wl`,
          (error, stdout, stderr) => {
            if (error) {
              console.log(`error: ${error.message}`)
              return
            }
            if (stderr) {
              console.log(`stderr: ${stderr}`)
              return
            }
            console.log(`stdout: ${stdout}`)
          },
        )
      } else {
        throw Error('conditions not satisfied, working list not created')
      }

      return workingList
    } catch (error) {
      console.log({ error })
      throw Error('The workingList entry has not been created')
    }
  }
}
