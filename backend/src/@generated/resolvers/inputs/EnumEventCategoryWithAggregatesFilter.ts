import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumEventCategoryFilter } from "../inputs/NestedEnumEventCategoryFilter";
import { NestedEnumEventCategoryWithAggregatesFilter } from "../inputs/NestedEnumEventCategoryWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { EventCategory } from "../../enums/EventCategory";

@TypeGraphQL.InputType("EnumEventCategoryWithAggregatesFilter", {})
export class EnumEventCategoryWithAggregatesFilter {
  @TypeGraphQL.Field(_type => EventCategory, {
    nullable: true
  })
  equals?: "FOLDER" | "DOCUMENT" | undefined;

  @TypeGraphQL.Field(_type => [EventCategory], {
    nullable: true
  })
  in?: Array<"FOLDER" | "DOCUMENT"> | undefined;

  @TypeGraphQL.Field(_type => [EventCategory], {
    nullable: true
  })
  notIn?: Array<"FOLDER" | "DOCUMENT"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumEventCategoryWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumEventCategoryWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumEventCategoryFilter, {
    nullable: true
  })
  _min?: NestedEnumEventCategoryFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumEventCategoryFilter, {
    nullable: true
  })
  _max?: NestedEnumEventCategoryFilter | undefined;
}
