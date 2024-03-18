import * as TypeGraphQL from 'type-graphql'
import type { GraphQLResolveInfo } from 'graphql'
import { Patient } from '../../@generated'
import {
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
  transformInfoIntoPrismaArgs,
} from '../../@generated/helpers'
import { PrismaClient } from '@prisma/client'
import { EmptyTrashArgs } from './args/EmptyTrashArgs'
import { AppSubscriptionTriggerArgs } from './AppSubscription/args/AppSubscriptionTriggerArgs'

@TypeGraphQL.Resolver((_of) => Patient)
export class EmptyTrashMutation {
  @TypeGraphQL.Mutation((_returns) => Boolean, {
    nullable: false,
  })
  async emptyTrashMutation(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() { userId }: EmptyTrashArgs,
    @TypeGraphQL.PubSub('APP_SUBSCRIPTION')
    publish: TypeGraphQL.Publisher<AppSubscriptionTriggerArgs>,
    @TypeGraphQL.PubSub('GET_UPDATED_PATIENT')
    update: TypeGraphQL.Publisher<string>,
  ): Promise<Boolean> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    const prisma = getPrismaFromContext(ctx) as PrismaClient
    try {
      const doc = await prisma.patient.findMany({ where: { onTrash: true } })
      await prisma.patient.updateMany({
        where: { onTrash: true },
        data: { deleted: true },
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      })
      await publish({
        appPayload: '',
        userId,
        type: 'emptyTrash',
        global: true,
      })
      doc.forEach((d) => update(d.id))

      return true
    } catch (error) {
      throw Error('Impossible to empty trash')
    }
  }
}
