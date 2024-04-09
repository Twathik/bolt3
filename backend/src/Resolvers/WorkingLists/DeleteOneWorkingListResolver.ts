import * as TypeGraphQL from 'type-graphql'
import type { GraphQLResolveInfo } from 'graphql'
import { WorkingList } from '../../@generated'
import {
  transformCountFieldIntoSelectRelationsCount,
  transformInfoIntoPrismaArgs,
} from '../../@generated/helpers'
import { rmSync } from 'fs'
import { DeleteOneWorkingListArgs } from './args/DeleteOneWorkingListArgs'
import { Context } from '../../context'
import { WebsocketMessageInterface } from '../../Utils/PubSubInterfaces/WebsocketMessageInterface'
import { v4 as uuid } from 'uuid'
import { notificationTopic } from '../../Utils/PubSubInterfaces/MessageTypesInterface'
@TypeGraphQL.Resolver((_of) => WorkingList)
export class DeleteOneWorkingListResolver {
  @TypeGraphQL.Mutation((_returns) => WorkingList, {
    nullable: true,
  })
  async deleteOneWorkingList(
    @TypeGraphQL.Ctx() { prisma, pubSub }: Context,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() { userId, ...args }: DeleteOneWorkingListArgs,
  ): Promise<WorkingList | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)

    try {
      const workingList = await prisma.workingList.findFirstOrThrow({ ...args })
      if (workingList.linked) throw Error('Linked exams can not be deleted')
      await prisma.workingList.delete({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      })
      rmSync(`./worklists/${workingList.id}.wl`)
      rmSync(`./worklists/${workingList.id}.txt`)
      const message: WebsocketMessageInterface = {
        type: 'workingList',
        destination: ['folder'],
        global: true,
        id: uuid(),
        subscriptionIds: [workingList.patientId],
        payload: { operation: 'delete', workingList },
      }
      await pubSub.publish(notificationTopic, message)

      return workingList
    } catch (error) {
      throw Error('The workingList has not been deleted')
    }
  }
}
