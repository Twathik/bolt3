import * as TypeGraphQL from 'type-graphql'
import { EventTypes } from '../../../@generated'

@TypeGraphQL.ArgsType()
export class GetDataTableConfigurationArgs {
  @TypeGraphQL.Field((_type) => EventTypes, {
    nullable: false,
  })
  eventType!: EventTypes
}
