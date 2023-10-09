import * as TypeGraphQL from 'type-graphql'
import { Patient } from '../../../@generated'
import { PatientSearchResult } from '../Models/patientSearchResult'
import { format } from 'date-fns'

@TypeGraphQL.Resolver((_of) => PatientSearchResult)
export class PatientDdnFormatedFieldResolver {
  @TypeGraphQL.FieldResolver((_returns) => String, { nullable: false })
  async formatted_ddn(@TypeGraphQL.Root() patient: Patient): Promise<String> {
    return format(new Date(patient.ddn), 'dd/MM/yyyy')
  }
}
