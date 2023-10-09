import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumSexeWithAggregatesFilter } from "../inputs/EnumSexeWithAggregatesFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("PatientScalarWhereWithAggregatesInput", {})
export class PatientScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [PatientScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: PatientScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PatientScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: PatientScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PatientScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: PatientScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  lastName?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  firstName?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  ddn?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumSexeWithAggregatesFilter, {
    nullable: true
  })
  sexe?: EnumSexeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableListFilter, {
    nullable: true
  })
  nTel?: StringNullableListFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  created?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updated?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BoolWithAggregatesFilter, {
    nullable: true
  })
  deleted?: BoolWithAggregatesFilter | undefined;
}
