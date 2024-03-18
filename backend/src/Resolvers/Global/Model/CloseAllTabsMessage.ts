import * as TypeGraphQL from 'type-graphql'

@TypeGraphQL.ObjectType('CloseAllTabsMessage', {})
export class CloseAllTabsMessage {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  message!: string
}
