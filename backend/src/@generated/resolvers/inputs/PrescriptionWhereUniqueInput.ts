import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClinicalEventRelationFilter } from "../inputs/ClinicalEventRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { JsonFilter } from "../inputs/JsonFilter";
import { PrescriptionWhereInput } from "../inputs/PrescriptionWhereInput";

@TypeGraphQL.InputType("PrescriptionWhereUniqueInput", {})
export class PrescriptionWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  clinicalEventId?: string | undefined;

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
