import * as TypeGraphQL from 'type-graphql'
import type { GraphQLResolveInfo } from 'graphql'
import { ClinicalEvent, DeleteOneClinicalEventArgs } from '../../@generated'
import {
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
  transformInfoIntoPrismaArgs,
} from '../../@generated/helpers'
import { PrismaClient } from '@prisma/client'

@TypeGraphQL.Resolver((_of) => ClinicalEvent)
export class DeleteOneClinicalEventResolver {
  @TypeGraphQL.Mutation((_returns) => ClinicalEvent, {
    nullable: true,
  })
  async deleteOneClinicalEvent(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteOneClinicalEventArgs,
  ): Promise<ClinicalEvent | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    const prisma = getPrismaFromContext(ctx) as PrismaClient
    try {
      const clinicalEvent = await prisma.clinicalEvent.update({
        ...args,
        data: { deleted: true },
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      })
      return clinicalEvent
    } catch (error) {
      throw Error('The clinical event was not created')
    }
  }
}
