import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventTypes } from "../../enums/EventTypes";

@TypeGraphQL.InputType("SettingCreateallowedEventTypesInput", {})
export class SettingCreateallowedEventTypesInput {
  @TypeGraphQL.Field(_type => [EventTypes], {
    nullable: false
  })
  set!: Array<"CLINICAL_VISIT" | "PRESCRIPTION" | "GENERAL_SONO">;
}
