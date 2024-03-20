import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientDocumentType } from "../../enums/PatientDocumentType";

@TypeGraphQL.InputType("EnumPatientDocumentTypeFieldUpdateOperationsInput", {})
export class EnumPatientDocumentTypeFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => PatientDocumentType, {
    nullable: true
  })
  set?: "folder" | "document" | undefined;
}
