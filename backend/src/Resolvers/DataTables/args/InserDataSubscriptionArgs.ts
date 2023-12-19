import * as TypeGraphQL from 'type-graphql'

@TypeGraphQL.ArgsType()
export class InsertDataSubscriptionArgs {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  clinicalEventId!: String
}
