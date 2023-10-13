import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MobileDeviceCountAggregate } from "../outputs/MobileDeviceCountAggregate";
import { MobileDeviceMaxAggregate } from "../outputs/MobileDeviceMaxAggregate";
import { MobileDeviceMinAggregate } from "../outputs/MobileDeviceMinAggregate";
import { MobileDeviceType } from "../../enums/MobileDeviceType";

@TypeGraphQL.ObjectType("MobileDeviceGroupBy", {})
export class MobileDeviceGroupBy {
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

  @TypeGraphQL.Field(_type => MobileDeviceCountAggregate, {
    nullable: true
  })
  _count!: MobileDeviceCountAggregate | null;

  @TypeGraphQL.Field(_type => MobileDeviceMinAggregate, {
    nullable: true
  })
  _min!: MobileDeviceMinAggregate | null;

  @TypeGraphQL.Field(_type => MobileDeviceMaxAggregate, {
    nullable: true
  })
  _max!: MobileDeviceMaxAggregate | null;
}
