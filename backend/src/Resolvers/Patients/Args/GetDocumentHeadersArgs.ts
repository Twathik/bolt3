import * as TypeGraphQL from 'type-graphql'
import { PatientDocumentType } from '../../../@generated'

@TypeGraphQL.ArgsType()
export class GetDocumentHeadersArgs {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  patientId!: string
  @TypeGraphQL.Field((_type) => PatientDocumentType, {
    nullable: false,
  })
  patientDocumentType!: PatientDocumentType
}
