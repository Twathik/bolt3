import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumMobileDeviceTypeFilter } from "../inputs/EnumMobileDeviceTypeFilter";
import { MobileDeviceUuidAccessTokenCompoundUniqueInput } from "../inputs/MobileDeviceUuidAccessTokenCompoundUniqueInput";
import { MobileDeviceWhereInput } from "../inputs/MobileDeviceWhereInput";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("MobileDeviceWhereUniqueInput", {})
export class MobileDeviceWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  accessToken?: string | undefined;

  @TypeGraphQL.Field(_type => MobileDeviceUuidAccessTokenCompoundUniqueInput, {
    nullable: true
  })
  uuid_accessToken?: MobileDeviceUuidAccessTokenCompoundUniqueInput | undefined;

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
  uuid?: StringFilter | undefined;

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
