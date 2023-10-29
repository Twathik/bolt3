import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { ConsultationListPatientIdConsultationIdActiveCompoundUniqueInput } from "../inputs/ConsultationListPatientIdConsultationIdActiveCompoundUniqueInput";
import { ConsultationListWhereInput } from "../inputs/ConsultationListWhereInput";
import { ConsultationRelationFilter } from "../inputs/ConsultationRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { PatientRelationFilter } from "../inputs/PatientRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ConsultationListWhereUniqueInput", {})
export class ConsultationListWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => ConsultationListPatientIdConsultationIdActiveCompoundUniqueInput, {
    nullable: true
  })
  patientId_consultationId_active?: ConsultationListPatientIdConsultationIdActiveCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => [ConsultationListWhereInput], {
    nullable: true
  })
  AND?: ConsultationListWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ConsultationListWhereInput], {
    nullable: true
  })
  OR?: ConsultationListWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ConsultationListWhereInput], {
    nullable: true
  })
  NOT?: ConsultationListWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => PatientRelationFilter, {
    nullable: true
  })
  patient?: PatientRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ConsultationRelationFilter, {
    nullable: true
  })
  consultation?: ConsultationRelationFilter | undefined;
}
