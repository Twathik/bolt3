import * as TypeGraphQL from 'type-graphql'
import {
  AppSubscriptionPayloadEnumType,
  AppSubscriptionPayloadType,
} from '../enums/AppSubscriptionPayloadType'

@TypeGraphQL.ObjectType('AppSubscriptionModel', {})
export class AppSubscriptionModel {
  @TypeGraphQL.Field((_type) => AppSubscriptionPayloadType, {
    nullable: false,
  })
  type!: AppSubscriptionPayloadEnumType

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  messageId!: string

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  appPayload!: string
}
