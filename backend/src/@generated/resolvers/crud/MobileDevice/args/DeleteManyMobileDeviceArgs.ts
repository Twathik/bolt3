import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MobileDeviceWhereInput } from "../../../inputs/MobileDeviceWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyMobileDeviceArgs {
  @TypeGraphQL.Field(_type => MobileDeviceWhereInput, {
    nullable: true
  })
  where?: MobileDeviceWhereInput | undefined;
}
