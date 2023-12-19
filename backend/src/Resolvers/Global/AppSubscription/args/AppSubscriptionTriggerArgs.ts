import * as TypeGraphQL from 'type-graphql'
import { AppSubscriptionPayloadType } from '../enums/SecondaryDisplayEnum'

@TypeGraphQL.ArgsType()
export class AppSubscriptionTriggerArgs {
  @TypeGraphQL.Field((_type) => AppSubscriptionPayloadType, {
    nullable: false,
  })
  type!: 'closeAllTabs' | 'secondaryDisplay' | 'emptyTrash'

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  appPayload!: string

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  userId!: string
}
