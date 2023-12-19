import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumModalityExamStatusFilter } from "../inputs/NestedEnumModalityExamStatusFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { ModalityExamStatus } from "../../enums/ModalityExamStatus";

@TypeGraphQL.InputType("NestedEnumModalityExamStatusWithAggregatesFilter", {})
export class NestedEnumModalityExamStatusWithAggregatesFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumModalityExamStatusWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumModalityExamStatusWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumModalityExamStatusFilter, {
    nullable: true
  })
  _min?: NestedEnumModalityExamStatusFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumModalityExamStatusFilter, {
    nullable: true
  })
  _max?: NestedEnumModalityExamStatusFilter | undefined;
}
