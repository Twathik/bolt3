import * as TypeGraphQL from 'type-graphql'

@TypeGraphQL.ArgsType()
export class RegisterPatientArgs {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  patientId!: string
}
