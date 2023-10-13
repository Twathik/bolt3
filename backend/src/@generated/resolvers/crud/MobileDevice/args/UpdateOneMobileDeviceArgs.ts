import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MobileDeviceUpdateInput } from "../../../inputs/MobileDeviceUpdateInput";
import { MobileDeviceWhereUniqueInput } from "../../../inputs/MobileDeviceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneMobileDeviceArgs {
  @TypeGraphQL.Field(_type => MobileDeviceUpdateInput, {
    nullable: false
  })
  data!: MobileDeviceUpdateInput;

  @TypeGraphQL.Field(_type => MobileDeviceWhereUniqueInput, {
    nullable: false
  })
  where!: MobileDeviceWhereUniqueInput;
}
