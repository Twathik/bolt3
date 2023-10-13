import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MobileDeviceUpdateManyMutationInput } from "../../../inputs/MobileDeviceUpdateManyMutationInput";
import { MobileDeviceWhereInput } from "../../../inputs/MobileDeviceWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMobileDeviceArgs {
  @TypeGraphQL.Field(_type => MobileDeviceUpdateManyMutationInput, {
    nullable: false
  })
  data!: MobileDeviceUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => MobileDeviceWhereInput, {
    nullable: true
  })
  where?: MobileDeviceWhereInput | undefined;
}
