import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClinicalEventRelationFilter } from "../inputs/ClinicalEventRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { JsonFilter } from "../inputs/JsonFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("PrescriptionWhereInput", {})
export class PrescriptionWhereInput {
  @TypeGraphQL.Field(_type => [PrescriptionWhereInput], {
    nullable: true
  })
  AND?: PrescriptionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PrescriptionWhereInput], {
    nullable: true
  })
  OR?: PrescriptionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PrescriptionWhereInput], {
    nullable: true
  })
  NOT?: PrescriptionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  clinicalEventId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => JsonFilter, {
    nullable: true
  })
  savedPrescription?: JsonFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => ClinicalEventRelationFilter, {
    nullable: true
  })
  clinicalEvent?: ClinicalEventRelationFilter | undefined;
}
