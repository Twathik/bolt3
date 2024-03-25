import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumPatientDocumentTypeFieldUpdateOperationsInput } from "../inputs/EnumPatientDocumentTypeFieldUpdateOperationsInput";
import { NullableBytesFieldUpdateOperationsInput } from "../inputs/NullableBytesFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PatientUpdateOneRequiredWithoutDocumentStoreNestedInput } from "../inputs/PatientUpdateOneRequiredWithoutDocumentStoreNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("DocumentStoreUpdateInput", {})
export class DocumentStoreUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumPatientDocumentTypeFieldUpdateOperationsInput, {
    nullable: true
  })
  patientDocumentType?: EnumPatientDocumentTypeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableBytesFieldUpdateOperationsInput, {
    nullable: true
  })
  content?: NullableBytesFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  textContent?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => PatientUpdateOneRequiredWithoutDocumentStoreNestedInput, {
    nullable: true
  })
  patient?: PatientUpdateOneRequiredWithoutDocumentStoreNestedInput | undefined;
}
