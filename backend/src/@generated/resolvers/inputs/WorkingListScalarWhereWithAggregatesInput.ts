import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumModalityExamStatusWithAggregatesFilter } from "../inputs/EnumModalityExamStatusWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("WorkingListScalarWhereWithAggregatesInput", {})
export class WorkingListScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [WorkingListScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: WorkingListScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkingListScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: WorkingListScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkingListScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: WorkingListScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  patientId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  modalityId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  userId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  clinicalEventId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumModalityExamStatusWithAggregatesFilter, {
    nullable: true
  })
  modalityExamStatus?: EnumModalityExamStatusWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BoolWithAggregatesFilter, {
    nullable: true
  })
  linked?: BoolWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  linkId?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BoolWithAggregatesFilter, {
    nullable: true
  })
  locked?: BoolWithAggregatesFilter | undefined;
}
