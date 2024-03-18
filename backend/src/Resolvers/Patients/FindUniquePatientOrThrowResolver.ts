import * as TypeGraphQL from 'type-graphql'
import type { GraphQLResolveInfo } from 'graphql'
import {
  transformCountFieldIntoSelectRelationsCount,
  transformInfoIntoPrismaArgs,
} from '../../@generated/helpers'
import { FindUniquePatientOrThrowArgs, Patient } from '../../@generated'
import { Context } from '../../context'

@TypeGraphQL.Resolver((_of) => Patient)
export class FindUniquePatientOrThrowResolver {
  @TypeGraphQL.Query((_returns) => Patient, {
    nullable: true,
  })
  async getPatient(
    @TypeGraphQL.Ctx() ctx: Context,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniquePatientOrThrowArgs,
  ): Promise<Patient | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    try {
      const patient = await ctx.prisma.patient.findUniqueOrThrow({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      })
      if (patient.deleted) throw Error('deleted folder')
      return patient
    } catch (error) {
      throw Error('not found patient')
    }
  }
}
