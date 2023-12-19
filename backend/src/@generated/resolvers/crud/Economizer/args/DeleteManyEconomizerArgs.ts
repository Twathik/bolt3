import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EconomizerWhereInput } from "../../../inputs/EconomizerWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyEconomizerArgs {
  @TypeGraphQL.Field(_type => EconomizerWhereInput, {
    nullable: true
  })
  where?: EconomizerWhereInput | undefined;
}
