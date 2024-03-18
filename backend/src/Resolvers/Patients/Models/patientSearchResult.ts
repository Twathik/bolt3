import * as TypeGraphQL from 'type-graphql'
import { Sexe } from '../../../@generated'

@TypeGraphQL.ObjectType('PatientSearchResult', {})
export class PatientSearchResult {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  id!: string

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  lastName!: string

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  firstName!: string

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  ddn!: number

  @TypeGraphQL.Field((_type) => Sexe, {
    nullable: false,
  })
  sexe!: 'M' | 'F'
}
