import * as TypeGraphQL from 'type-graphql'
import {
  AppSubscriptionPayloadEnumType,
  AppSubscriptionPayloadType,
} from '../enums/AppSubscriptionPayloadType'

@TypeGraphQL.ArgsType()
export class AppSubscriptionTriggerArgs {
  @TypeGraphQL.Field((_type) => AppSubscriptionPayloadType, {
    nullable: false,
  })
  type!: AppSubscriptionPayloadEnumType

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  appPayload!: string

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  userId!: string

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: false,
  })
  global!: boolean

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  subscriptionSpecificId!: string
}
