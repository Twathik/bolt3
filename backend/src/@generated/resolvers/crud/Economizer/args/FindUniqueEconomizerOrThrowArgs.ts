import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EconomizerWhereUniqueInput } from "../../../inputs/EconomizerWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueEconomizerOrThrowArgs {
  @TypeGraphQL.Field(_type => EconomizerWhereUniqueInput, {
    nullable: false
  })
  where!: EconomizerWhereUniqueInput;
}
