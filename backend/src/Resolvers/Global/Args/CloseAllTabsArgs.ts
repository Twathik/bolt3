import * as TypeGraphQL from 'type-graphql'

@TypeGraphQL.ArgsType()
export class closeAllTabsArgs {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  message!: string
}
