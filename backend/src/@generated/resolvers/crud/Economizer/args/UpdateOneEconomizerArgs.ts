import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EconomizerUpdateInput } from "../../../inputs/EconomizerUpdateInput";
import { EconomizerWhereUniqueInput } from "../../../inputs/EconomizerWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneEconomizerArgs {
  @TypeGraphQL.Field(_type => EconomizerUpdateInput, {
    nullable: false
  })
  data!: EconomizerUpdateInput;

  @TypeGraphQL.Field(_type => EconomizerWhereUniqueInput, {
    nullable: false
  })
  where!: EconomizerWhereUniqueInput;
}
