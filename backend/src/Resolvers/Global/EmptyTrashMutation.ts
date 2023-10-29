import * as TypeGraphQL from 'type-graphql'
import type { GraphQLResolveInfo } from 'graphql'
import {
  AffectedRowsOutput,
  Patient,
  UpdateManyPatientArgs,
} from '../../@generated'
import {
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
  transformInfoIntoPrismaArgs,
} from '../../@generated/helpers'
import { PrismaClient } from '@prisma/client'

@TypeGraphQL.Resolver((_of) => Patient)
export class EmptyTrashMutation {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async emptyTrashMutation(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyPatientArgs,
    @TypeGraphQL.PubSub('EMPTY_TRASH') publish: TypeGraphQL.Publisher<string>,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    const prisma = getPrismaFromContext(ctx) as PrismaClient
    try {
      const trash = await prisma.patient.updateMany({
        ...args,
        where: { AND: [{ id: args.where?.id }, { onTrash: true }] },
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      })
      publish('empty')
      return trash
    } catch (error) {
      throw Error('Impossible to empty trash')
    }
  }
}
