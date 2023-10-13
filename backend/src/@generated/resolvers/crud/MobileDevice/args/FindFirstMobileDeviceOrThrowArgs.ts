import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MobileDeviceOrderByWithRelationInput } from "../../../inputs/MobileDeviceOrderByWithRelationInput";
import { MobileDeviceWhereInput } from "../../../inputs/MobileDeviceWhereInput";
import { MobileDeviceWhereUniqueInput } from "../../../inputs/MobileDeviceWhereUniqueInput";
import { MobileDeviceScalarFieldEnum } from "../../../../enums/MobileDeviceScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstMobileDeviceOrThrowArgs {
  @TypeGraphQL.Field(_type => MobileDeviceWhereInput, {
    nullable: true
  })
  where?: MobileDeviceWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MobileDeviceOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: MobileDeviceOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => MobileDeviceWhereUniqueInput, {
    nullable: true
  })
  cursor?: MobileDeviceWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [MobileDeviceScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "uuid" | "accessToken" | "mobileDeviceType" | "expireAt" | "connected"> | undefined;
}
