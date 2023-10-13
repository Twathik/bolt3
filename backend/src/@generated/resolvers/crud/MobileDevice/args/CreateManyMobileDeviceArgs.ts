import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MobileDeviceCreateManyInput } from "../../../inputs/MobileDeviceCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyMobileDeviceArgs {
  @TypeGraphQL.Field(_type => [MobileDeviceCreateManyInput], {
    nullable: false
  })
  data!: MobileDeviceCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
