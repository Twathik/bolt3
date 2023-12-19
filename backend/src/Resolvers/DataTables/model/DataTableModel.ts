import * as TypeGraphQL from 'type-graphql'
import { DataTableParmTypeEnum } from '../enums/DataTableParmTypeEnum'
import { WidgetTypesEnums } from '../enums/WidgetTypesEnums'

import { createUnionType } from 'type-graphql'

@TypeGraphQL.ObjectType('DataTablePayload', {})
export class DataTablePayload {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  paramName!: string

  @TypeGraphQL.Field((_type) => DataTableParmTypeEnum, {
    nullable: false,
  })
  paramType!: 'number' | 'string'
}

@TypeGraphQL.ObjectType('DataTableModel', {})
export class DataTableModel {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  paramHeader!: string

  @TypeGraphQL.Field((_type) => DataTablePayload, {
    nullable: false,
  })
  data!: DataTablePayload

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  columnWidth!: number

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  value?: string | null
}

@TypeGraphQL.ObjectType('DataTableConfigModel', {})
export class DataTableConfigModel {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  id!: string

  @TypeGraphQL.Field((_type) => WidgetTypesEnums, {
    nullable: false,
  })
  widgetType!: 'table'

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  tableName!: string

  @TypeGraphQL.Field((_type) => [DataTableModel], {
    nullable: false,
  })
  config!: DataTableModel[]
}

@TypeGraphQL.ObjectType('pictureGeneratorConfigModel', {})
export class pictureGeneratorConfigModel {
  @TypeGraphQL.Field((_type) => WidgetTypesEnums, {
    nullable: false,
  })
  widgetType!: 'pictureGenerator'

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  id!: string

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  paramName!: string

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  widgetName!: string
}

export const WidgetUnion = createUnionType({
  name: 'WidgetUnion', // Name of the GraphQL union
  types: () => [DataTableConfigModel, pictureGeneratorConfigModel] as const, // function that returns tuple of object types classes
  resolveType: (value) => {
    if (value.widgetType === 'table') {
      return DataTableConfigModel // Return object type class (the one with `@ObjectType()`)
    }
    if (value.widgetType === 'pictureGenerator') {
      return pictureGeneratorConfigModel // Or the schema name of the type as a string
    }
    return undefined
  },
})

export type WidgetUnionType = typeof WidgetUnion

@TypeGraphQL.ObjectType('DataTableSectionModel', {})
export class DataTableSectionModel {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  sectionName!: string

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  tableContentType!: string

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  id!: string

  @TypeGraphQL.Field((_type) => [WidgetUnion], {
    nullable: false,
  })
  widgets!: WidgetUnionType[]
}
