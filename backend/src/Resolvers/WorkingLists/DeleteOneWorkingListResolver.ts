import * as TypeGraphQL from 'type-graphql'
import type { GraphQLResolveInfo } from 'graphql'
import { WorkingList } from '../../@generated'
import {
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
  transformInfoIntoPrismaArgs,
} from '../../@generated/helpers'
import { PrismaClient } from '@prisma/client'
import { rmSync } from 'fs'
import { AppSubscriptionTriggerArgs } from '../Global/AppSubscription/args/AppSubscriptionTriggerArgs'
import { DeleteOneWorkingListArgs } from './args/DeleteOneWorkingListArgs'

@TypeGraphQL.Resolver((_of) => WorkingList)
export class DeleteOneWorkingListResolver {
  @TypeGraphQL.Mutation((_returns) => WorkingList, {
    nullable: true,
  })
  async deleteOneWorkingList(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() { userId, ...args }: DeleteOneWorkingListArgs,
    @TypeGraphQL.PubSub('APP_SUBSCRIPTION')
    notify: TypeGraphQL.Publisher<AppSubscriptionTriggerArgs>,
  ): Promise<WorkingList | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    const prisma = getPrismaFromContext(ctx) as PrismaClient
    try {
      const workingList = await prisma.workingList.delete({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      })
      rmSync(`./worklists/${workingList.id}.wl`)
      rmSync(`./worklists/${workingList.id}.txt`)
      const {
        id,
        clinicalEventId,
        createdAt,
        modalityExamStatus,
        linkId,
        linked,
        locked,
      } = workingList

      await notify({
        type: 'workingLists',
        global: true,
        userId,
        appPayload: JSON.stringify({
          operation: 'delete',
          workingList: {
            id,
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
      throw Error('The workingList has not been deleted')
    }
  }
}
