import * as TypeGraphQL from 'type-graphql'

@TypeGraphQL.ArgsType()
export class RegisterPatientArgs {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  patient_id!: string

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  userId!: string
}
