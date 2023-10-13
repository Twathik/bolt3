import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumMobileDeviceTypeWithAggregatesFilter } from "../inputs/EnumMobileDeviceTypeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("MobileDeviceScalarWhereWithAggregatesInput", {})
export class MobileDeviceScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [MobileDeviceScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: MobileDeviceScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MobileDeviceScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: MobileDeviceScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MobileDeviceScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: MobileDeviceScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  uuid?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  accessToken?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumMobileDeviceTypeWithAggregatesFilter, {
    nullable: true
  })
  mobileDeviceType?: EnumMobileDeviceTypeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  expireAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BoolWithAggregatesFilter, {
    nullable: true
  })
  connected?: BoolWithAggregatesFilter | undefined;
}
