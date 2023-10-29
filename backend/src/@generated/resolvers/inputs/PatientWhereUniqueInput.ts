import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { ConsultationListListRelationFilter } from "../inputs/ConsultationListListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumSexeFilter } from "../inputs/EnumSexeFilter";
import { PatientWhereInput } from "../inputs/PatientWhereInput";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("PatientWhereUniqueInput", {})
export class PatientWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => [PatientWhereInput], {
    nullable: true
  })
  AND?: PatientWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PatientWhereInput], {
    nullable: true
  })
  OR?: PatientWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PatientWhereInput], {
    nullable: true
  })
  NOT?: PatientWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  lastName?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  firstName?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  ddn?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => EnumSexeFilter, {
    nullable: true
  })
  sexe?: EnumSexeFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  nTel?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  address?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updated?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  deleted?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  onTrash?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  informationsConfirmed?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => ConsultationListListRelationFilter, {
    nullable: true
  })
  ConsultationList?: ConsultationListListRelationFilter | undefined;
}
