import * as TypeGraphQL from 'type-graphql'
import { EventTypes } from '../../../@generated'

@TypeGraphQL.ArgsType()
export class createOneClinicalEventArgs {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  userId!: string

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  patientId!: string

  @TypeGraphQL.Field((_type) => EventTypes, {
    nullable: false,
  })
  eventType!: EventTypes
}
