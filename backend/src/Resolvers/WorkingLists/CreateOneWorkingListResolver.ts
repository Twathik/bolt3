import * as TypeGraphQL from 'type-graphql'
import type { GraphQLResolveInfo } from 'graphql'
import { WorkingList } from '../../@generated'
import {
  transformCountFieldIntoSelectRelationsCount,
  transformInfoIntoPrismaArgs,
} from '../../@generated/helpers'
import { Context } from '../../context'
import { execSync } from 'child_process'
import { generateWorkList, modalitiesTypes } from '../../Utils/DICOM/utils'
import { format } from 'date-fns'
import { CreateOneWorkingListArgs } from './args/CreateOneWorkingListArgs'
import { WebsocketMessageInterface } from '../../Utils/PubSubInterfaces/WebsocketMessageInterface'
import { v4 as uuid } from 'uuid'
import { notificationTopic } from '../../Utils/PubSubInterfaces/MessageTypesInterface'

@TypeGraphQL.Resolver((_of) => WorkingList)
export class CreateOneWorkingListResolver {
  @TypeGraphQL.Mutation((_returns) => WorkingList, {
    nullable: false,
  })
  async createOneWorkingList(
    @TypeGraphQL.Ctx() { prisma, pubSub }: Context,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() { userId, ...args }: CreateOneWorkingListArgs,
  ): Promise<WorkingList> {
    const { _count } = transformInfoIntoPrismaArgs(info)

    try {
      const workingList = await prisma.workingList.create({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      })
      console.log({ workingList })

      const [patient, user, clinicalEvent, modality] = await Promise.all([
        prisma.patient.findUnique({
          where: { id: workingList.patientId },
        }),
        prisma.user.findUnique({ where: { id: workingList.userId } }),
        prisma.clinicalEvent.findFirstOrThrow({
          where: { id: workingList.clinicalEventId },
        }),
        prisma.modality.findFirstOrThrow({
          where: { id: workingList.modalityId },
        }),
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

          const message: WebsocketMessageInterface = {
            destination: ['folder'],
            global: true,
            id: uuid(),
            payload: {
              workingList: {
                ...workingList,
                modality,
                user: {
                  fullName: `${user.lastName}^${user.firstName}`,
                },
                clinicalEvent: {
                  eventType: clinicalEvent.eventType,
                },
                patient: {
                  patientFullName: `${patient.lastName}^${patient.firstName}`,
                },
              },
              operation: 'create',
            },
            type: 'workingList',
            subscriptionIds: [patient.id],
          }
          await pubSub.publish(notificationTopic, message)
        } catch (e) {
          const error = e as any
          error.status // 0 : successful exit, but here in exception it has to be greater than 0
          error.message // Holds the message you typically want.
          error.stderr // Holds the stderr output. Use `.toString()`.
          error.stdout // Holds the stdout output. Use `.toString()`.
        }
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
