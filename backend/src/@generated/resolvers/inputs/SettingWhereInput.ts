import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("SettingWhereInput", {})
export class SettingWhereInput {
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

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

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
