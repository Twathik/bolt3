import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumMobileDeviceTypeFilter } from "../inputs/NestedEnumMobileDeviceTypeFilter";
import { MobileDeviceType } from "../../enums/MobileDeviceType";

@TypeGraphQL.InputType("EnumMobileDeviceTypeFilter", {})
export class EnumMobileDeviceTypeFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumMobileDeviceTypeFilter, {
    nullable: true
  })
  not?: NestedEnumMobileDeviceTypeFilter | undefined;
}
