import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { PatientScannedDocumentUpdatedocumentCollectionUrlsInput } from "../inputs/PatientScannedDocumentUpdatedocumentCollectionUrlsInput";
import { PatientUpdateOneRequiredWithoutPatientScanedDocumentNestedInput } from "../inputs/PatientUpdateOneRequiredWithoutPatientScanedDocumentNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("PatientScannedDocumentUpdateInput", {})
export class PatientScannedDocumentUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  documentCollectionName?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => PatientScannedDocumentUpdatedocumentCollectionUrlsInput, {
    nullable: true
  })
  documentCollectionUrls?: PatientScannedDocumentUpdatedocumentCollectionUrlsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  documentCollectionDate?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => PatientUpdateOneRequiredWithoutPatientScanedDocumentNestedInput, {
    nullable: true
  })
  patient?: PatientUpdateOneRequiredWithoutPatientScanedDocumentNestedInput | undefined;
}
