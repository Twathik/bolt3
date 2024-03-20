import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumPatientDocumentTypeFieldUpdateOperationsInput } from "../inputs/EnumPatientDocumentTypeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("DocumentStoreUpdateInput", {})
export class DocumentStoreUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  patientId?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumPatientDocumentTypeFieldUpdateOperationsInput, {
    nullable: true
  })
  patientDocumentType?: EnumPatientDocumentTypeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  content?: StringFieldUpdateOperationsInput | undefined;
}
