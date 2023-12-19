import * as TypeGraphQL from 'type-graphql'
import { AppSubscriptionPayloadType } from '../enums/SecondaryDisplayEnum'

@TypeGraphQL.ObjectType('AppSubscriptionModel', {})
export class AppSubscriptionModel {
  @TypeGraphQL.Field((_type) => AppSubscriptionPayloadType, {
    nullable: false,
  })
  type!: 'closeAllTabs' | 'secondaryDisplay' | 'emptyTrash'

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  messageId!: string

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  appPayload!: string
}
