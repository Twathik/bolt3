import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { ClinicalEventRelationFilter } from "../inputs/ClinicalEventRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumModalityExamStatusFilter } from "../inputs/EnumModalityExamStatusFilter";
import { ModalityRelationFilter } from "../inputs/ModalityRelationFilter";
import { PatientRelationFilter } from "../inputs/PatientRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
import { WorkingListWhereInput } from "../inputs/WorkingListWhereInput";

@TypeGraphQL.InputType("WorkingListWhereUniqueInput", {})
export class WorkingListWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => [WorkingListWhereInput], {
    nullable: true
  })
  AND?: WorkingListWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkingListWhereInput], {
    nullable: true
  })
  OR?: WorkingListWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkingListWhereInput], {
    nullable: true
  })
  NOT?: WorkingListWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => PatientRelationFilter, {
    nullable: true
  })
  patient?: PatientRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ModalityRelationFilter, {
    nullable: true
  })
  modality?: ModalityRelationFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ClinicalEventRelationFilter, {
    nullable: true
  })
  clinicalEvent?: ClinicalEventRelationFilter | undefined;
}
