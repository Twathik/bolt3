import * as TypeGraphQL from 'type-graphql'
import type { GraphQLResolveInfo } from 'graphql'
import { WorkingList } from '../../@generated'
import {
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
  transformInfoIntoPrismaArgs,
} from '../../@generated/helpers'
import { PrismaClient } from '@prisma/client'
import { AppSubscriptionTriggerArgs } from '../Global/AppSubscription/args/AppSubscriptionTriggerArgs'
import { UpdateOneWorkingListArgs } from './args/UpdateOneWorkingListArgs'

@TypeGraphQL.Resolver((_of) => WorkingList)
export class UpdateOneWorkingListResolver {
  @TypeGraphQL.Mutation((_returns) => WorkingList, {
    nullable: true,
  })
  async updateOneWorkingList(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() { userId, ...args }: UpdateOneWorkingListArgs,
    @TypeGraphQL.PubSub('APP_SUBSCRIPTION')
    notify: TypeGraphQL.Publisher<AppSubscriptionTriggerArgs>,
  ): Promise<WorkingList | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    const prisma = getPrismaFromContext(ctx) as PrismaClient
    try {
      const workingList = await prisma.workingList.update({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      })
      const [patient, user, modality] = await Promise.all([
        prisma.patient.findFirstOrThrow({
          where: { id: workingList.patientId },
        }),
        prisma.user.findFirstOrThrow({ where: { id: workingList.userId } }),

        prisma.modality.findFirstOrThrow({
          where: { id: workingList.modalityId },
        }),
      ])
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
          operation: 'update',
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
      return workingList
    } catch (error) {
      throw Error('The workingList could not have been updated')
    }
  }
}
