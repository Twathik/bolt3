import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ConsultationListScalarWhereWithAggregatesInput", {})
export class ConsultationListScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ConsultationListScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ConsultationListScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ConsultationListScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ConsultationListScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ConsultationListScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ConsultationListScalarWhereWithAggregatesInput[] | undefined;

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
  consultationId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BoolWithAggregatesFilter, {
    nullable: true
  })
  active?: BoolWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
