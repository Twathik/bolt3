import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventCategory } from "../../enums/EventCategory";

@TypeGraphQL.InputType("NestedEnumEventCategoryFilter", {})
export class NestedEnumEventCategoryFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumEventCategoryFilter, {
    nullable: true
  })
  not?: NestedEnumEventCategoryFilter | undefined;
}
