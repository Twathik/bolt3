import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SettingCreateallowedEventTypesInput } from "../inputs/SettingCreateallowedEventTypesInput";

@TypeGraphQL.InputType("SettingCreateManyInput", {})
export class SettingCreateManyInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  allowedMobileDevices_doctors?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  allowedMobileDevices_secretary?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  allowedDICOMmodalities?: number | undefined;

  @TypeGraphQL.Field(_type => SettingCreateallowedEventTypesInput, {
    nullable: true
  })
  allowedEventTypes?: SettingCreateallowedEventTypesInput | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  documentTemplateConfiguration?: string | undefined;
}
