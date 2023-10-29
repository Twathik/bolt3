import * as TypeGraphQL from 'type-graphql'
import type { GraphQLResolveInfo } from 'graphql'

import { Patient, UpdateOnePatientArgs } from '../../@generated'
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../@generated/helpers'
import updatePatient_typesense from '../../Utils/typesense/Patients/updatePatient'
import { Context } from '../../context'

@TypeGraphQL.Resolver((_of) => Patient)
export class UpdateOnePatientResolver {
  @TypeGraphQL.Mutation((_returns) => Patient, {
    nullable: true,
  })
  async updateOnePatient(
    @TypeGraphQL.Ctx() ctx: Context,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateOnePatientArgs,
    @TypeGraphQL.PubSub('GET_UPDATED_PATIENT')
    publish: TypeGraphQL.Publisher<string>,
  ): Promise<Patient | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    try {
      const patient = await getPrismaFromContext(ctx).patient.update({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      })
      await updatePatient_typesense({
        document: patient,
        typesense: ctx.typesense,
      })

      if (args?.where?.id) publish(args.where.id)
      return patient
    } catch (error) {
      console.log({ error })
      throw new Error('failed to update patient data')
    }
  }
}
