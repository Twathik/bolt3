import * as TypeGraphQL from 'type-graphql'
import { Sexe } from '../../../@generated'

@TypeGraphQL.ArgsType()
export class SearchPatientArgs {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  query_string!: string

  @TypeGraphQL.Field((_type) => Sexe, {
    nullable: false,
  })
  sexe!: Sexe
}
