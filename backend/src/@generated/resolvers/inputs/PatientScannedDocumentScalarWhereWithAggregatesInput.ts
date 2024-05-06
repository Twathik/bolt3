import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("PatientScannedDocumentScalarWhereWithAggregatesInput", {})
export class PatientScannedDocumentScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [PatientScannedDocumentScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: PatientScannedDocumentScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PatientScannedDocumentScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: PatientScannedDocumentScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PatientScannedDocumentScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: PatientScannedDocumentScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  documentCollectionName?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableListFilter, {
    nullable: true
  })
  documentCollectionUrls?: StringNullableListFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  documentCollectionDate?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  patientId?: StringWithAggregatesFilter | undefined;
}
