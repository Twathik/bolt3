import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MobileDeviceCreateInput } from "../../../inputs/MobileDeviceCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneMobileDeviceArgs {
  @TypeGraphQL.Field(_type => MobileDeviceCreateInput, {
    nullable: false
  })
  data!: MobileDeviceCreateInput;
}
