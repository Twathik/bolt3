import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MobileDeviceCountAggregate } from "../outputs/MobileDeviceCountAggregate";
import { MobileDeviceMaxAggregate } from "../outputs/MobileDeviceMaxAggregate";
import { MobileDeviceMinAggregate } from "../outputs/MobileDeviceMinAggregate";

@TypeGraphQL.ObjectType("AggregateMobileDevice", {})
export class AggregateMobileDevice {
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
