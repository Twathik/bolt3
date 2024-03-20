import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumPatientDocumentTypeFilter } from "../inputs/NestedEnumPatientDocumentTypeFilter";
import { NestedEnumPatientDocumentTypeWithAggregatesFilter } from "../inputs/NestedEnumPatientDocumentTypeWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { PatientDocumentType } from "../../enums/PatientDocumentType";

@TypeGraphQL.InputType("EnumPatientDocumentTypeWithAggregatesFilter", {})
export class EnumPatientDocumentTypeWithAggregatesFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumPatientDocumentTypeWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumPatientDocumentTypeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumPatientDocumentTypeFilter, {
    nullable: true
  })
  _min?: NestedEnumPatientDocumentTypeFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumPatientDocumentTypeFilter, {
    nullable: true
  })
  _max?: NestedEnumPatientDocumentTypeFilter | undefined;
}
