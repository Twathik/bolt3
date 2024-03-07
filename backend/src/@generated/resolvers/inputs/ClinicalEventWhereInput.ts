import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumEventCategoryFilter } from "../inputs/EnumEventCategoryFilter";
import { EnumEventTypesFilter } from "../inputs/EnumEventTypesFilter";
import { PatientRelationFilter } from "../inputs/PatientRelationFilter";
import { PrescriptionNullableRelationFilter } from "../inputs/PrescriptionNullableRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
import { WorkingListListRelationFilter } from "../inputs/WorkingListListRelationFilter";

@TypeGraphQL.InputType("ClinicalEventWhereInput", {})
export class ClinicalEventWhereInput {
  @TypeGraphQL.Field(_type => [ClinicalEventWhereInput], {
    nullable: true
  })
  AND?: ClinicalEventWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClinicalEventWhereInput], {
    nullable: true
  })
  OR?: ClinicalEventWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClinicalEventWhereInput], {
    nullable: true
  })
  NOT?: ClinicalEventWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => EnumEventTypesFilter, {
    nullable: true
  })
  eventType?: EnumEventTypesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumEventCategoryFilter, {
    nullable: true
  })
  eventCategory?: EnumEventCategoryFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  patientId?: StringFilter | undefined;

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
  deleted?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  report?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  dicom?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  dicomId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  clinicalDiagnosticId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PatientRelationFilter, {
    nullable: true
  })
  patient?: PatientRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PrescriptionNullableRelationFilter, {
    nullable: true
  })
  Prescription?: PrescriptionNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => WorkingListListRelationFilter, {
    nullable: true
  })
  WorkingList?: WorkingListListRelationFilter | undefined;
}
