import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ModalityExamStatus } from "../../enums/ModalityExamStatus";

@TypeGraphQL.InputType("EnumModalityExamStatusFieldUpdateOperationsInput", {})
export class EnumModalityExamStatusFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => ModalityExamStatus, {
    nullable: true
  })
  set?: "CREATED" | "INPROGRESS" | "REALIZED" | "REPORT_DONE" | "CLOSED" | undefined;
}
