import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumMobileDeviceTypeFilter } from "../inputs/NestedEnumMobileDeviceTypeFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { MobileDeviceType } from "../../enums/MobileDeviceType";

@TypeGraphQL.InputType("NestedEnumMobileDeviceTypeWithAggregatesFilter", {})
export class NestedEnumMobileDeviceTypeWithAggregatesFilter {
  @TypeGraphQL.Field(_type => MobileDeviceType, {
    nullable: true
  })
  equals?: "DOCTOR" | "SECRETARY" | undefined;

  @TypeGraphQL.Field(_type => [MobileDeviceType], {
    nullable: true
  })
  in?: Array<"DOCTOR" | "SECRETARY"> | undefined;

  @TypeGraphQL.Field(_type => [MobileDeviceType], {
    nullable: true
  })
  notIn?: Array<"DOCTOR" | "SECRETARY"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumMobileDeviceTypeWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumMobileDeviceTypeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumMobileDeviceTypeFilter, {
    nullable: true
  })
  _min?: NestedEnumMobileDeviceTypeFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumMobileDeviceTypeFilter, {
    nullable: true
  })
  _max?: NestedEnumMobileDeviceTypeFilter | undefined;
}
