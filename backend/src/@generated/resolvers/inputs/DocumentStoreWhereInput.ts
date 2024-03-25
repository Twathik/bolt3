import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesNullableFilter } from "../inputs/BytesNullableFilter";
import { EnumPatientDocumentTypeFilter } from "../inputs/EnumPatientDocumentTypeFilter";
import { PatientRelationFilter } from "../inputs/PatientRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("DocumentStoreWhereInput", {})
export class DocumentStoreWhereInput {
  @TypeGraphQL.Field(_type => [DocumentStoreWhereInput], {
    nullable: true
  })
  AND?: DocumentStoreWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [DocumentStoreWhereInput], {
    nullable: true
  })
  OR?: DocumentStoreWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [DocumentStoreWhereInput], {
    nullable: true
  })
  NOT?: DocumentStoreWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  patientId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => EnumPatientDocumentTypeFilter, {
    nullable: true
  })
  patientDocumentType?: EnumPatientDocumentTypeFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  content?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  textContent?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => PatientRelationFilter, {
    nullable: true
  })
  patient?: PatientRelationFilter | undefined;
}
