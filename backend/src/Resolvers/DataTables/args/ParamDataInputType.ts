import * as TypeGraphQL from 'type-graphql'
import { DataTableParmTypeEnum } from '../enums/DataTableParmTypeEnum'

@TypeGraphQL.InputType('ParamDataInputType', {})
export class ParamDataInputType {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  paramName!: string

  @TypeGraphQL.Field((_type) => DataTableParmTypeEnum, {
    nullable: false,
  })
  paramType!: 'number' | 'string'
}
