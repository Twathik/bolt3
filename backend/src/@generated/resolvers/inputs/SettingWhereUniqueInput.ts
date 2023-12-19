import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { SettingWhereInput } from "../inputs/SettingWhereInput";

@TypeGraphQL.InputType("SettingWhereUniqueInput", {})
export class SettingWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => [SettingWhereInput], {
    nullable: true
  })
  AND?: SettingWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SettingWhereInput], {
    nullable: true
  })
  OR?: SettingWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SettingWhereInput], {
    nullable: true
  })
  NOT?: SettingWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  allowedMobileDevices_doctors?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  allowedMobileDevices_secretary?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  allowedDICOMmodalities?: IntFilter | undefined;
}
