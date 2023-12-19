import * as TypeGraphQL from 'type-graphql'

export enum DataTableParmTypeEnum {
  number = 'number',
  string = 'string',
}
TypeGraphQL.registerEnumType(DataTableParmTypeEnum, {
  name: 'DataTableParmTypeEnum',
  description: '',
})
