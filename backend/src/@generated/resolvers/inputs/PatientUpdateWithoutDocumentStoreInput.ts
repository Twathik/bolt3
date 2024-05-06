import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { ClinicalEventUpdateManyWithoutPatientNestedInput } from "../inputs/ClinicalEventUpdateManyWithoutPatientNestedInput";
import { ConsultationListUpdateManyWithoutPatientNestedInput } from "../inputs/ConsultationListUpdateManyWithoutPatientNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumSexeFieldUpdateOperationsInput } from "../inputs/EnumSexeFieldUpdateOperationsInput";
import { NullableFloatFieldUpdateOperationsInput } from "../inputs/NullableFloatFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PatientScannedDocumentUpdateManyWithoutPatientNestedInput } from "../inputs/PatientScannedDocumentUpdateManyWithoutPatientNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { WorkingListUpdateManyWithoutPatientNestedInput } from "../inputs/WorkingListUpdateManyWithoutPatientNestedInput";

@TypeGraphQL.InputType("PatientUpdateWithoutDocumentStoreInput", {})
export class PatientUpdateWithoutDocumentStoreInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  lastName?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  firstName?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  ddn?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumSexeFieldUpdateOperationsInput, {
    nullable: true
  })
  sexe?: EnumSexeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  nTel?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  address?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableFloatFieldUpdateOperationsInput, {
    nullable: true
  })
  height?: NullableFloatFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableFloatFieldUpdateOperationsInput, {
    nullable: true
  })
  weight?: NullableFloatFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updated?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  deleted?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  onTrash?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  informationsConfirmed?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  patientAvatar?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ConsultationListUpdateManyWithoutPatientNestedInput, {
    nullable: true
  })
  ConsultationList?: ConsultationListUpdateManyWithoutPatientNestedInput | undefined;

  @TypeGraphQL.Field(_type => ClinicalEventUpdateManyWithoutPatientNestedInput, {
    nullable: true
  })
  ClinicalEvent?: ClinicalEventUpdateManyWithoutPatientNestedInput | undefined;

  @TypeGraphQL.Field(_type => WorkingListUpdateManyWithoutPatientNestedInput, {
    nullable: true
  })
  WorkingList?: WorkingListUpdateManyWithoutPatientNestedInput | undefined;

  @TypeGraphQL.Field(_type => PatientScannedDocumentUpdateManyWithoutPatientNestedInput, {
    nullable: true
  })
  PatientScanedDocument?: PatientScannedDocumentUpdateManyWithoutPatientNestedInput | undefined;
}
