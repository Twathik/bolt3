import * as TypeGraphQL from 'type-graphql'
import { Patient } from '../../@generated'
import typesense from '../../Utils/typesense'
import { Context } from '../../context'
import patientSchema from '../../Utils/typesense/patientSchema'
import { getUnixTime, getYear } from 'date-fns'

@TypeGraphQL.Resolver((_of) => Patient)
export class IndexPatientsResolver {
  @TypeGraphQL.Mutation((_returns) => Boolean, { nullable: true })
  async indexPatients(
    @TypeGraphQL.Ctx() ctx: Context,
  ): Promise<Boolean | null> {
    try {
      await typesense.collections('patients').delete()
    } catch (error) {
      console.log('new collection')
    }
    try {
      const documents = await ctx.prisma.patient.findMany()
      await typesense.collections().create(patientSchema)
      await typesense
        .collections('patients')
        .documents()
        .import(
          documents.map((doc) => {
            const { ddn, firstName, lastName, sexe, id } = doc

            const d = {
              id,
              lastName,
              firstName,
              sexe,
              ddn: getUnixTime(ddn),
              ddn_year: getYear(ddn),
            }
            return d
          }),
          { action: 'create' },
        )
      return true
    } catch (error) {
      console.log({ error })
      console.log({ error: (error as any).importResults })
      return false
    }
  }
}
