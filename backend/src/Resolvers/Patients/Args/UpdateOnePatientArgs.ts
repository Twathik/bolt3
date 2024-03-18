import * as TypeGraphQL from 'type-graphql'
import {
  PatientUpdateInput,
  PatientWhereUniqueInput,
} from '../../../@generated'

@TypeGraphQL.ArgsType()
export class UpdateOnePatientArgs {
  @TypeGraphQL.Field((_type) => PatientUpdateInput, {
    nullable: false,
  })
  data!: PatientUpdateInput
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  userId!: string

  @TypeGraphQL.Field((_type) => PatientWhereUniqueInput, {
    nullable: false,
  })
  where!: PatientWhereUniqueInput
}
