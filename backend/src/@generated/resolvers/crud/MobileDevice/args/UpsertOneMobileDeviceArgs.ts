import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MobileDeviceCreateInput } from "../../../inputs/MobileDeviceCreateInput";
import { MobileDeviceUpdateInput } from "../../../inputs/MobileDeviceUpdateInput";
import { MobileDeviceWhereUniqueInput } from "../../../inputs/MobileDeviceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneMobileDeviceArgs {
  @TypeGraphQL.Field(_type => MobileDeviceWhereUniqueInput, {
    nullable: false
  })
  where!: MobileDeviceWhereUniqueInput;

  @TypeGraphQL.Field(_type => MobileDeviceCreateInput, {
    nullable: false
  })
  create!: MobileDeviceCreateInput;

  @TypeGraphQL.Field(_type => MobileDeviceUpdateInput, {
    nullable: false
  })
  update!: MobileDeviceUpdateInput;
}
