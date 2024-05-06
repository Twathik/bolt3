import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";

@TypeGraphQL.InputType("PatientScannedDocumentScalarWhereInput", {})
export class PatientScannedDocumentScalarWhereInput {
  @TypeGraphQL.Field(_type => [PatientScannedDocumentScalarWhereInput], {
    nullable: true
  })
  AND?: PatientScannedDocumentScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PatientScannedDocumentScalarWhereInput], {
    nullable: true
  })
  OR?: PatientScannedDocumentScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PatientScannedDocumentScalarWhereInput], {
    nullable: true
  })
  NOT?: PatientScannedDocumentScalarWhereInput[] | undefined;

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
}
