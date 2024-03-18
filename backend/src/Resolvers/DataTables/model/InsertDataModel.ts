import * as TypeGraphQL from 'type-graphql'
import {
  DataTablePayload,
  WidgetUnion,
  WidgetUnionType,
} from './DataTableModel'

@TypeGraphQL.ObjectType('InsertDataModel', {})
export class InsertDataModel {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  value!: string
  @TypeGraphQL.Field((_type) => DataTablePayload, {
    nullable: false,
  })
  paramData!: DataTablePayload

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
