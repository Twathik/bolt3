import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MobileDeviceType } from "../../enums/MobileDeviceType";

@TypeGraphQL.InputType("EnumMobileDeviceTypeFieldUpdateOperationsInput", {})
export class EnumMobileDeviceTypeFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => MobileDeviceType, {
    nullable: true
  })
  set?: "DOCTOR" | "SECRETARY" | undefined;
}
