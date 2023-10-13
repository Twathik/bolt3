import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { MobileDeviceType } from "../enums/MobileDeviceType";

@TypeGraphQL.ObjectType("MobileDevice", {})
export class MobileDevice {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  uuid!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  accessToken!: string;

  @TypeGraphQL.Field(_type => MobileDeviceType, {
    nullable: false
  })
  mobileDeviceType!: "DOCTOR" | "SECRETARY";

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  expireAt!: Date;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  connected!: boolean;
}
