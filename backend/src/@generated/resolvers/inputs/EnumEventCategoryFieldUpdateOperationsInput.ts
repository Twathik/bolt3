import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventCategory } from "../../enums/EventCategory";

@TypeGraphQL.InputType("EnumEventCategoryFieldUpdateOperationsInput", {})
export class EnumEventCategoryFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => EventCategory, {
    nullable: true
  })
  set?: "FOLDER" | "DOCUMENT" | undefined;
}
