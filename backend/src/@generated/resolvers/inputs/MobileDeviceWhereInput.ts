import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumMobileDeviceTypeFilter } from "../inputs/EnumMobileDeviceTypeFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("MobileDeviceWhereInput", {})
export class MobileDeviceWhereInput {
  @TypeGraphQL.Field(_type => [MobileDeviceWhereInput], {
    nullable: true
  })
  AND?: MobileDeviceWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MobileDeviceWhereInput], {
    nullable: true
  })
  OR?: MobileDeviceWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MobileDeviceWhereInput], {
    nullable: true
  })
  NOT?: MobileDeviceWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  uuid?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  accessToken?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => EnumMobileDeviceTypeFilter, {
    nullable: true
  })
  mobileDeviceType?: EnumMobileDeviceTypeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  expireAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  connected?: BoolFilter | undefined;
}
