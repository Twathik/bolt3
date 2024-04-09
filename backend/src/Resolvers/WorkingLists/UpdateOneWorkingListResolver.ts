import * as TypeGraphQL from 'type-graphql'
import type { GraphQLResolveInfo } from 'graphql'
import { WorkingList } from '../../@generated'
import {
  transformCountFieldIntoSelectRelationsCount,
  transformInfoIntoPrismaArgs,
} from '../../@generated/helpers'
import { UpdateOneWorkingListArgs } from './args/UpdateOneWorkingListArgs'
import { Context } from '../../context'
import { v4 as uuid } from 'uuid'
import { WebsocketMessageInterface } from '../../Utils/PubSubInterfaces/WebsocketMessageInterface'
import { notificationTopic } from '../../Utils/PubSubInterfaces/MessageTypesInterface'

@TypeGraphQL.Resolver((_of) => WorkingList)
export class UpdateOneWorkingListResolver {
  @TypeGraphQL.Mutation((_returns) => WorkingList, {
    nullable: true,
  })
  async updateOneWorkingList(
    @TypeGraphQL.Ctx() { prisma, pubSub }: Context,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() { userId, ...args }: UpdateOneWorkingListArgs,
  ): Promise<WorkingList | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)

    try {
      const workingList = await prisma.workingList.update({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      })
      const [patient, user, modality, clinicalEvent] = await Promise.all([
        prisma.patient.findFirstOrThrow({
          where: { id: workingList.patientId },
        }),
        prisma.user.findFirstOrThrow({ where: { id: workingList.userId } }),

        prisma.modality.findFirstOrThrow({
          where: { id: workingList.modalityId },
        }),
        prisma.clinicalEvent.findFirstOrThrow({
          where: { id: workingList.clinicalEventId },
        }),
      ])
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
          operation: 'update',
        },
        type: 'workingList',
        subscriptionIds: [patient.id],
      }
      await pubSub.publish(notificationTopic, message)
      return workingList
    } catch (error) {
      throw Error('The workingList could not have been updated')
    }
  }
}
