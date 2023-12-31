import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventTypes } from "../../enums/EventTypes";

@TypeGraphQL.InputType("EnumEventTypesFieldUpdateOperationsInput", {})
export class EnumEventTypesFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => EventTypes, {
    nullable: true
  })
  set?: "CLINICAL_VISIT" | "PRESCRIPTION" | "GENERAL_SONO" | undefined;
}
