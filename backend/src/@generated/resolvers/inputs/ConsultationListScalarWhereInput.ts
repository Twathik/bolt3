import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ConsultationListScalarWhereInput", {})
export class ConsultationListScalarWhereInput {
  @TypeGraphQL.Field(_type => [ConsultationListScalarWhereInput], {
    nullable: true
  })
  AND?: ConsultationListScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ConsultationListScalarWhereInput], {
    nullable: true
  })
  OR?: ConsultationListScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ConsultationListScalarWhereInput], {
    nullable: true
  })
  NOT?: ConsultationListScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  patientId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  consultationId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  active?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;
}
