import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EconomizerCreateInput } from "../../../inputs/EconomizerCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneEconomizerArgs {
  @TypeGraphQL.Field(_type => EconomizerCreateInput, {
    nullable: false
  })
  data!: EconomizerCreateInput;
}
