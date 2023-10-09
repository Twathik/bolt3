import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumSexeFilter } from "../inputs/EnumSexeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";

@TypeGraphQL.InputType("PatientWhereInput", {})
export class PatientWhereInput {
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
  id?: StringFilter | undefined;

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

  @TypeGraphQL.Field(_type => StringNullableListFilter, {
    nullable: true
  })
  nTel?: StringNullableListFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updated?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  deleted?: BoolFilter | undefined;
}
