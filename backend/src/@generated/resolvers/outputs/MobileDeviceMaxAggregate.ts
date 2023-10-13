import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MobileDeviceType } from "../../enums/MobileDeviceType";

@TypeGraphQL.ObjectType("MobileDeviceMaxAggregate", {})
export class MobileDeviceMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  uuid!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  accessToken!: string | null;

  @TypeGraphQL.Field(_type => MobileDeviceType, {
    nullable: true
  })
  mobileDeviceType!: "DOCTOR" | "SECRETARY" | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  expireAt!: Date | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  connected!: boolean | null;
}
