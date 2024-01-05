import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventTypes } from "../../enums/EventTypes";

@TypeGraphQL.InputType("SettingUpdateallowedEventTypesInput", {})
export class SettingUpdateallowedEventTypesInput {
  @TypeGraphQL.Field(_type => [EventTypes], {
    nullable: true
  })
  set?: Array<"CLINICAL_VISIT" | "PRESCRIPTION" | "GENERAL_SONO"> | undefined;

  @TypeGraphQL.Field(_type => [EventTypes], {
    nullable: true
  })
  push?: Array<"CLINICAL_VISIT" | "PRESCRIPTION" | "GENERAL_SONO"> | undefined;
}
