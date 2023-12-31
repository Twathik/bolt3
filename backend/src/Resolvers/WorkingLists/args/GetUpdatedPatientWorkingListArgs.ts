import * as TypeGraphQL from 'type-graphql'

@TypeGraphQL.ArgsType()
export class GetUpdatedPatientWorkingListArgs {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  clinicalEventId!: string
}
