import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumEventTypesFilter } from "../inputs/NestedEnumEventTypesFilter";
import { EventTypes } from "../../enums/EventTypes";

@TypeGraphQL.InputType("EnumEventTypesFilter", {})
export class EnumEventTypesFilter {
  @TypeGraphQL.Field(_type => EventTypes, {
    nullable: true
  })
  equals?: "DIAGNOSTIC" | "PRESCRIPTION" | undefined;

  @TypeGraphQL.Field(_type => [EventTypes], {
    nullable: true
  })
  in?: Array<"DIAGNOSTIC" | "PRESCRIPTION"> | undefined;

  @TypeGraphQL.Field(_type => [EventTypes], {
    nullable: true
  })
  notIn?: Array<"DIAGNOSTIC" | "PRESCRIPTION"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumEventTypesFilter, {
    nullable: true
  })
  not?: NestedEnumEventTypesFilter | undefined;
}
