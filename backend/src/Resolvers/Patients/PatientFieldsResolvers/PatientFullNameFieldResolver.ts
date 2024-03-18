import * as TypeGraphQL from 'type-graphql'
import { Patient } from '../../../@generated'

@TypeGraphQL.Resolver((_of) => Patient)
export class PatientFullNameFieldResolver {
  @TypeGraphQL.FieldResolver((_returns) => String, { nullable: false })
  async patientFullName(@TypeGraphQL.Root() patient: Patient): Promise<String> {
    return `${patient.lastName} ${patient.firstName}`
  }
}
