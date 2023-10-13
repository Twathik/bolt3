import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MobileDeviceCountOrderByAggregateInput } from "../inputs/MobileDeviceCountOrderByAggregateInput";
import { MobileDeviceMaxOrderByAggregateInput } from "../inputs/MobileDeviceMaxOrderByAggregateInput";
import { MobileDeviceMinOrderByAggregateInput } from "../inputs/MobileDeviceMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MobileDeviceOrderByWithAggregationInput", {})
export class MobileDeviceOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  uuid?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  accessToken?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  mobileDeviceType?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  expireAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  connected?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => MobileDeviceCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: MobileDeviceCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MobileDeviceMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: MobileDeviceMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MobileDeviceMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: MobileDeviceMinOrderByAggregateInput | undefined;
}
