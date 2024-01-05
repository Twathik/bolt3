import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumEventTypesFilter } from "../inputs/NestedEnumEventTypesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { EventTypes } from "../../enums/EventTypes";

@TypeGraphQL.InputType("NestedEnumEventTypesWithAggregatesFilter", {})
export class NestedEnumEventTypesWithAggregatesFilter {
  @TypeGraphQL.Field(_type => EventTypes, {
    nullable: true
  })
  equals?: "CLINICAL_VISIT" | "PRESCRIPTION" | "GENERAL_SONO" | undefined;

  @TypeGraphQL.Field(_type => [EventTypes], {
    nullable: true
  })
  in?: Array<"CLINICAL_VISIT" | "PRESCRIPTION" | "GENERAL_SONO"> | undefined;

  @TypeGraphQL.Field(_type => [EventTypes], {
    nullable: true
  })
  notIn?: Array<"CLINICAL_VISIT" | "PRESCRIPTION" | "GENERAL_SONO"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumEventTypesWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumEventTypesWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumEventTypesFilter, {
    nullable: true
  })
  _min?: NestedEnumEventTypesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumEventTypesFilter, {
    nullable: true
  })
  _max?: NestedEnumEventTypesFilter | undefined;
}
