import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NullableBytesFieldUpdateOperationsInput } from "../inputs/NullableBytesFieldUpdateOperationsInput";
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

  @TypeGraphQL.Field(_type => NullableBytesFieldUpdateOperationsInput, {
    nullable: true
  })
  clinicalData?: NullableBytesFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableBytesFieldUpdateOperationsInput, {
    nullable: true
  })
  documentData?: NullableBytesFieldUpdateOperationsInput | undefined;
}
