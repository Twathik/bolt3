import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MobileDeviceOrderByWithRelationInput } from "../../../inputs/MobileDeviceOrderByWithRelationInput";
import { MobileDeviceWhereInput } from "../../../inputs/MobileDeviceWhereInput";
import { MobileDeviceWhereUniqueInput } from "../../../inputs/MobileDeviceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateMobileDeviceArgs {
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
}
