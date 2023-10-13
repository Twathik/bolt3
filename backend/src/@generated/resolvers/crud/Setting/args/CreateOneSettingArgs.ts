import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SettingCreateInput } from "../../../inputs/SettingCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneSettingArgs {
  @TypeGraphQL.Field(_type => SettingCreateInput, {
    nullable: true
  })
  data?: SettingCreateInput | undefined;
}
