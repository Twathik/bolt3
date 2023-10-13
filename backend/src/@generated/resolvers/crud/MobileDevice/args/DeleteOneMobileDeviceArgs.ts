import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MobileDeviceWhereUniqueInput } from "../../../inputs/MobileDeviceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneMobileDeviceArgs {
  @TypeGraphQL.Field(_type => MobileDeviceWhereUniqueInput, {
    nullable: false
  })
  where!: MobileDeviceWhereUniqueInput;
}
