import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { JsonWithAggregatesFilter } from "../inputs/JsonWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("PrescriptionScalarWhereWithAggregatesInput", {})
export class PrescriptionScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [PrescriptionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: PrescriptionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PrescriptionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: PrescriptionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PrescriptionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: PrescriptionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  clinicalEventId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => JsonWithAggregatesFilter, {
    nullable: true
  })
  savedPrescription?: JsonWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
