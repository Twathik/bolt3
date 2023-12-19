import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EconomizerUpdateManyMutationInput } from "../../../inputs/EconomizerUpdateManyMutationInput";
import { EconomizerWhereInput } from "../../../inputs/EconomizerWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyEconomizerArgs {
  @TypeGraphQL.Field(_type => EconomizerUpdateManyMutationInput, {
    nullable: false
  })
  data!: EconomizerUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => EconomizerWhereInput, {
    nullable: true
  })
  where?: EconomizerWhereInput | undefined;
}
