import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ModalityExamStatus } from "../../enums/ModalityExamStatus";

@TypeGraphQL.InputType("NestedEnumModalityExamStatusFilter", {})
export class NestedEnumModalityExamStatusFilter {
  @TypeGraphQL.Field(_type => ModalityExamStatus, {
    nullable: true
  })
  equals?: "CREATED" | "INPROGRESS" | "REALIZED" | "REPORT_DONE" | "CLOSED" | undefined;

  @TypeGraphQL.Field(_type => [ModalityExamStatus], {
    nullable: true
  })
  in?: Array<"CREATED" | "INPROGRESS" | "REALIZED" | "REPORT_DONE" | "CLOSED"> | undefined;

  @TypeGraphQL.Field(_type => [ModalityExamStatus], {
    nullable: true
  })
  notIn?: Array<"CREATED" | "INPROGRESS" | "REALIZED" | "REPORT_DONE" | "CLOSED"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumModalityExamStatusFilter, {
    nullable: true
  })
  not?: NestedEnumModalityExamStatusFilter | undefined;
}
