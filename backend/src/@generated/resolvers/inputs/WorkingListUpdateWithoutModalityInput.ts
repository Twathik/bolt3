import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { ClinicalEventUpdateOneRequiredWithoutWorkingListNestedInput } from "../inputs/ClinicalEventUpdateOneRequiredWithoutWorkingListNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumModalityExamStatusFieldUpdateOperationsInput } from "../inputs/EnumModalityExamStatusFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PatientUpdateOneRequiredWithoutWorkingListNestedInput } from "../inputs/PatientUpdateOneRequiredWithoutWorkingListNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutWorkingListNestedInput } from "../inputs/UserUpdateOneRequiredWithoutWorkingListNestedInput";

@TypeGraphQL.InputType("WorkingListUpdateWithoutModalityInput", {})
export class WorkingListUpdateWithoutModalityInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumModalityExamStatusFieldUpdateOperationsInput, {
    nullable: true
  })
  modalityExamStatus?: EnumModalityExamStatusFieldUpdateOperationsInput | undefined;

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
  linked?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  linkId?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  locked?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => PatientUpdateOneRequiredWithoutWorkingListNestedInput, {
    nullable: true
  })
  patient?: PatientUpdateOneRequiredWithoutWorkingListNestedInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutWorkingListNestedInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutWorkingListNestedInput | undefined;

  @TypeGraphQL.Field(_type => ClinicalEventUpdateOneRequiredWithoutWorkingListNestedInput, {
    nullable: true
  })
  clinicalEvent?: ClinicalEventUpdateOneRequiredWithoutWorkingListNestedInput | undefined;
}
