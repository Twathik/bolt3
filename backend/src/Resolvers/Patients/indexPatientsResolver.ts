import * as TypeGraphQL from 'type-graphql'
import { Patient } from '../../@generated'

import { Context } from '../../context'
import patientSchema from '../../Utils/typesense/Patients/patientSchema'
import createPatient_typesense from '../../Utils/typesense/Patients/createPatient'

@TypeGraphQL.Resolver((_of) => Patient)
export class IndexPatientsResolver {
  @TypeGraphQL.Mutation((_returns) => Boolean, { nullable: true })
  async indexPatients(
    @TypeGraphQL.Ctx() ctx: Context,
  ): Promise<Boolean | null> {
    try {
      await ctx.typesense.collections('patients').delete()
    } catch (error) {
      console.log('new collection')
    }
    try {
      const documents = await ctx.prisma.patient.findMany()
      await ctx.typesense.collections().create(patientSchema)
      await createPatient_typesense({ typesense: ctx.typesense, documents })
      return true
    } catch (error) {
      console.log({ error })
      console.log({ error: (error as any).importResults })
      return false
    }
  }
}
