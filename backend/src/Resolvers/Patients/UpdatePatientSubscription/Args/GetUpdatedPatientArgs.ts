import * as TypeGraphQL from 'type-graphql'

@TypeGraphQL.ArgsType()
export class GetUpdatedPatientArgs {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  id!: string
}
