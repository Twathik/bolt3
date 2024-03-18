import * as TypeGraphQL from 'type-graphql'

export enum WidgetTypesEnums {
  table = 'table',
  pictureGenerator = 'pictureGenerator',
}
TypeGraphQL.registerEnumType(WidgetTypesEnums, {
  name: 'WidgetTypesEnums',
  description: '',
})
