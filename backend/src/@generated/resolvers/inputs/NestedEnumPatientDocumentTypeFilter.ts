import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientDocumentType } from "../../enums/PatientDocumentType";

@TypeGraphQL.InputType("NestedEnumPatientDocumentTypeFilter", {})
export class NestedEnumPatientDocumentTypeFilter {
  @TypeGraphQL.Field(_type => PatientDocumentType, {
    nullable: true
  })
  equals?: "folder" | "document" | undefined;

  @TypeGraphQL.Field(_type => [PatientDocumentType], {
    nullable: true
  })
  in?: Array<"folder" | "document"> | undefined;

  @TypeGraphQL.Field(_type => [PatientDocumentType], {
    nullable: true
  })
  notIn?: Array<"folder" | "document"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumPatientDocumentTypeFilter, {
    nullable: true
  })
  not?: NestedEnumPatientDocumentTypeFilter | undefined;
}
