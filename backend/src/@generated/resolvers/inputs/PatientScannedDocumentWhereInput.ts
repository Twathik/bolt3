import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { PatientRelationFilter } from "../inputs/PatientRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";

@TypeGraphQL.InputType("PatientScannedDocumentWhereInput", {})
export class PatientScannedDocumentWhereInput {
  @TypeGraphQL.Field(_type => [PatientScannedDocumentWhereInput], {
    nullable: true
  })
  AND?: PatientScannedDocumentWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PatientScannedDocumentWhereInput], {
    nullable: true
  })
  OR?: PatientScannedDocumentWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PatientScannedDocumentWhereInput], {
    nullable: true
  })
  NOT?: PatientScannedDocumentWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  documentCollectionName?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableListFilter, {
    nullable: true
  })
  documentCollectionUrls?: StringNullableListFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  documentCollectionDate?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  patientId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => PatientRelationFilter, {
    nullable: true
  })
  patient?: PatientRelationFilter | undefined;
}
