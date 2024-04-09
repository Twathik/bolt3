import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumEventTypesNullableListFilter } from "../inputs/EnumEventTypesNullableListFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("SettingScalarWhereWithAggregatesInput", {})
export class SettingScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [SettingScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: SettingScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SettingScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: SettingScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SettingScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: SettingScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  allowedMobileDevices_doctors?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  allowedMobileDevices_secretary?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  allowedDICOMmodalities?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumEventTypesNullableListFilter, {
    nullable: true
  })
  allowedEventTypes?: EnumEventTypesNullableListFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  documentTemplateConfiguration?: StringNullableWithAggregatesFilter | undefined;
}
