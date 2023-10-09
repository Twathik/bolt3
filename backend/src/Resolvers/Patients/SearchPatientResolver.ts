import { GraphQLResolveInfo } from 'graphql'
import * as TypeGraphQL from 'type-graphql'
import { Context } from '../../context'
import { SearchPatientArgs } from './Args/SearchPatientArgs'
import { PatientSearchResult } from './Models/patientSearchResult'
import { RawPatientDocumentResultInterface } from '../../Utils/typesense/Patients/PatientDocumentInterface'

@TypeGraphQL.Resolver((_of) => PatientSearchResult)
export class SearchPatientResolver {
  @TypeGraphQL.Query((_returns) => [PatientSearchResult])
  async searchPatientResolver(
    @TypeGraphQL.Ctx() ctx: Context,
    @TypeGraphQL.Info() _info: GraphQLResolveInfo,
    @TypeGraphQL.Args()
    { query_string, sexe }: SearchPatientArgs,
  ): Promise<PatientSearchResult[] | null> {
    try {
      const search_result = await ctx.typesense
        .collections('patients')
        .documents()
        .search({
          q: query_string,
          query_by: 'lastName,firstName,search_ddn_year',
          filter_by: `sexe: ${sexe}`,
          limit_hits: 5,
          page: 1,
          per_page: 5,
        })

      const patients: PatientSearchResult[] =
        search_result.hits?.map((hit) => {
          const { ddn, firstName, lastName, sexe, id } =
            hit.document as RawPatientDocumentResultInterface
          return {
            ddn,
            firstName,
            lastName,
            sexe,
            id,
          }
        }) ?? []
      return patients
    } catch (error) {
      throw Error((error as any).message)
    }
  }
}
