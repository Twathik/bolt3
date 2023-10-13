import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MobileDeviceType } from "../../enums/MobileDeviceType";

@TypeGraphQL.InputType("MobileDeviceCreateManyInput", {})
export class MobileDeviceCreateManyInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  uuid!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  accessToken!: string;

  @TypeGraphQL.Field(_type => MobileDeviceType, {
    nullable: true
  })
  mobileDeviceType?: "DOCTOR" | "SECRETARY" | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  expireAt!: Date;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  connected?: boolean | undefined;
}
