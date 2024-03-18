import * as TypeGraphQL from 'type-graphql'
import { ParamDataInputType } from './ParamDataInputType'

@TypeGraphQL.ArgsType()
export class TriggerInsertDataSubscriptionArgs {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  tableContentType!: string
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  clinicalEventId!: string
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  value!: string
  @TypeGraphQL.Field((_type) => ParamDataInputType, {
    nullable: false,
  })
  paramData!: ParamDataInputType
}
