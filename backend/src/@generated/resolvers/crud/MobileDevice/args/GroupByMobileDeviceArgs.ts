import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MobileDeviceOrderByWithAggregationInput } from "../../../inputs/MobileDeviceOrderByWithAggregationInput";
import { MobileDeviceScalarWhereWithAggregatesInput } from "../../../inputs/MobileDeviceScalarWhereWithAggregatesInput";
import { MobileDeviceWhereInput } from "../../../inputs/MobileDeviceWhereInput";
import { MobileDeviceScalarFieldEnum } from "../../../../enums/MobileDeviceScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByMobileDeviceArgs {
  @TypeGraphQL.Field(_type => MobileDeviceWhereInput, {
    nullable: true
  })
  where?: MobileDeviceWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MobileDeviceOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: MobileDeviceOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [MobileDeviceScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "uuid" | "accessToken" | "mobileDeviceType" | "expireAt" | "connected">;

  @TypeGraphQL.Field(_type => MobileDeviceScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: MobileDeviceScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
