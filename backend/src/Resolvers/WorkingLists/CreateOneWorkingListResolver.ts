import * as TypeGraphQL from 'type-graphql'
import type { GraphQLResolveInfo } from 'graphql'
import { WorkingList } from '../../@generated'
import {
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
  transformInfoIntoPrismaArgs,
} from '../../@generated/helpers'
import { Context } from '../../context'
import { PrismaClient } from '@prisma/client'
import { execSync } from 'child_process'
import { generateWorkList, modalitiesTypes } from '../../Utils/DICOM/utils'
import { format } from 'date-fns'
import { AppSubscriptionTriggerArgs } from '../Global/AppSubscription/args/AppSubscriptionTriggerArgs'
import { CreateOneWorkingListArgs } from './args/CreateOneWorkingListArgs'

@TypeGraphQL.Resolver((_of) => WorkingList)
export class CreateOneWorkingListResolver {
  @TypeGraphQL.Mutation((_returns) => WorkingList, {
    nullable: false,
  })
  async createOneWorkingList(
    @TypeGraphQL.Ctx() ctx: Context,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() { userId, ...args }: CreateOneWorkingListArgs,
    @TypeGraphQL.PubSub('APP_SUBSCRIPTION')
    notify: TypeGraphQL.Publisher<AppSubscriptionTriggerArgs>,
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

        try {
          const cmd = `docker run --rm -v ./worklists:/var/local imbio/dcmtk dump2dcm /var/local/${workingList.id}.txt /var/local/${workingList.id}.wl`
          execSync(cmd).toString()
        } catch (e) {
          const error = e as any
          error.status // 0 : successful exit, but here in exception it has to be greater than 0
          error.message // Holds the message you typically want.
          error.stderr // Holds the stderr output. Use `.toString()`.
          error.stdout // Holds the stdout output. Use `.toString()`.
        }

        const {
          id,
          clinicalEventId,
          createdAt,
          modalityExamStatus,
          linkId,
          linked,
          locked,
        } = workingList
        const {
          id: modalityId,
          modalityPseudo,
          modalityType,
          modalityAETitle,
        } = modality
        const { firstName, lastName } = patient
        const { fullName } = user
        await notify({
          type: 'workingLists',
          global: true,
          userId,
          appPayload: JSON.stringify({
            operation: 'create',
            workingList: {
              id,
              modality: {
                id: modalityId,
                modalityPseudo,
                modalityType,
                modalityAETitle,
              },
              patient: {
                patientFullName: `${lastName} ${firstName}`,
              },
              user: {
                fullName,
              },
              clinicalEventId,
              createdAt,
              modalityExamStatus,
              linkId,
              linked,
              locked,
            },
          }),
        })
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
