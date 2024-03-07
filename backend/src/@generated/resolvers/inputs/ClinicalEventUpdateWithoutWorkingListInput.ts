import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumEventCategoryFieldUpdateOperationsInput } from "../inputs/EnumEventCategoryFieldUpdateOperationsInput";
import { EnumEventTypesFieldUpdateOperationsInput } from "../inputs/EnumEventTypesFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PatientUpdateOneRequiredWithoutClinicalEventNestedInput } from "../inputs/PatientUpdateOneRequiredWithoutClinicalEventNestedInput";
import { PrescriptionUpdateOneWithoutClinicalEventNestedInput } from "../inputs/PrescriptionUpdateOneWithoutClinicalEventNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutClinicalEventNestedInput } from "../inputs/UserUpdateOneRequiredWithoutClinicalEventNestedInput";

@TypeGraphQL.InputType("ClinicalEventUpdateWithoutWorkingListInput", {})
export class ClinicalEventUpdateWithoutWorkingListInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumEventTypesFieldUpdateOperationsInput, {
    nullable: true
  })
  eventType?: EnumEventTypesFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumEventCategoryFieldUpdateOperationsInput, {
    nullable: true
  })
  eventCategory?: EnumEventCategoryFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  deleted?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  report?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  dicom?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  dicomId?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  clinicalDiagnosticId?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutClinicalEventNestedInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutClinicalEventNestedInput | undefined;

  @TypeGraphQL.Field(_type => PatientUpdateOneRequiredWithoutClinicalEventNestedInput, {
    nullable: true
  })
  patient?: PatientUpdateOneRequiredWithoutClinicalEventNestedInput | undefined;

  @TypeGraphQL.Field(_type => PrescriptionUpdateOneWithoutClinicalEventNestedInput, {
    nullable: true
  })
  Prescription?: PrescriptionUpdateOneWithoutClinicalEventNestedInput | undefined;
}
