import * as TypeGraphQL from 'type-graphql'
import type { GraphQLResolveInfo } from 'graphql'
import { Context } from '../../context'
import { Patient } from '../../@generated'
import {
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
  transformInfoIntoPrismaArgs,
} from '../../@generated/helpers'
import { CreateOnePatientArgs } from './Args/CreateOnePatientArgs'
import createPatient_typesense from '../../Utils/typesense/Patients/createPatient'
import { PrismaClient } from '@prisma/client'

@TypeGraphQL.Resolver((_of) => Patient)
export class AddOnePatientToIndex {
  @TypeGraphQL.Mutation((_returns) => Patient, {
    nullable: false,
  })
  async AddOnePatientToIndex(
    @TypeGraphQL.Ctx() ctx: Context,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateOnePatientArgs,
  ): Promise<Patient> {
    const { _count } = transformInfoIntoPrismaArgs(info)

    const { data } = args

    try {
      const patient: Patient = await getPrismaFromContext(ctx).patient.create({
        ...{ data },
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      })

      try {
        await createPatient_typesense({
          typesense: ctx.typesense,
          documents: [patient],
        })
        return patient
      } catch (error) {
        console.log({ error })
        await (getPrismaFromContext(ctx) as PrismaClient).patient.delete({
          where: { id: patient.id },
        })
        throw Error(error as any)
      }
    } catch (error) {
      throw Error(error as any)
    }
  }
}
