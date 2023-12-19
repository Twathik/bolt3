import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EconomizerCreateInput } from "../../../inputs/EconomizerCreateInput";
import { EconomizerUpdateInput } from "../../../inputs/EconomizerUpdateInput";
import { EconomizerWhereUniqueInput } from "../../../inputs/EconomizerWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneEconomizerArgs {
  @TypeGraphQL.Field(_type => EconomizerWhereUniqueInput, {
    nullable: false
  })
  where!: EconomizerWhereUniqueInput;

  @TypeGraphQL.Field(_type => EconomizerCreateInput, {
    nullable: false
  })
  create!: EconomizerCreateInput;

  @TypeGraphQL.Field(_type => EconomizerUpdateInput, {
    nullable: false
  })
  update!: EconomizerUpdateInput;
}
