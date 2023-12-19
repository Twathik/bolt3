import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumModalityExamStatusFilter } from "../inputs/EnumModalityExamStatusFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("WorkingListScalarWhereInput", {})
export class WorkingListScalarWhereInput {
  @TypeGraphQL.Field(_type => [WorkingListScalarWhereInput], {
    nullable: true
  })
  AND?: WorkingListScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkingListScalarWhereInput], {
    nullable: true
  })
  OR?: WorkingListScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkingListScalarWhereInput], {
    nullable: true
  })
  NOT?: WorkingListScalarWhereInput[] | undefined;

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
  modalityId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  clinicalEventId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => EnumModalityExamStatusFilter, {
    nullable: true
  })
  modalityExamStatus?: EnumModalityExamStatusFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  linked?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  linkId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  locked?: BoolFilter | undefined;
}
