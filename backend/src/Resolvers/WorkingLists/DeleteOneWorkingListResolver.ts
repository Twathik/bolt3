import * as TypeGraphQL from 'type-graphql'
import type { GraphQLResolveInfo } from 'graphql'
import { DeleteOneWorkingListArgs, WorkingList } from '../../@generated'
import {
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
  transformInfoIntoPrismaArgs,
} from '../../@generated/helpers'
import { PrismaClient } from '@prisma/client'
import { rmSync } from 'fs'

@TypeGraphQL.Resolver((_of) => WorkingList)
export class DeleteOneWorkingListResolver {
  @TypeGraphQL.Mutation((_returns) => WorkingList, {
    nullable: true,
  })
  async deleteOneWorkingList(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteOneWorkingListArgs,
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
      return workingList
    } catch (error) {
      throw Error('The workingList has not been deleted')
    }
  }
}
