import * as TypeGraphQL from 'type-graphql'
import { WidgetUnion, WidgetUnionType } from '../model/DataTableModel'
import { ParamDataInputType } from './ParamDataInputType'

@TypeGraphQL.ArgsType()
export class InsertDataPayload {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  value!: string

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  clinicalEventId!: string

  @TypeGraphQL.Field((_type) => ParamDataInputType, {
    nullable: false,
  })
  paramData!: ParamDataInputType

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  columnWidth!: number

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  tableContentType!: string
  @TypeGraphQL.Field((_type) => WidgetUnion, {
    nullable: false,
  })
  widget!: WidgetUnionType
}
