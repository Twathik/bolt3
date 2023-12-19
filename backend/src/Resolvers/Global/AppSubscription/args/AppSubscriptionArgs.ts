import * as TypeGraphQL from 'type-graphql'

@TypeGraphQL.ArgsType()
export class AppSubscriptionArgs {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  userId!: string
}
