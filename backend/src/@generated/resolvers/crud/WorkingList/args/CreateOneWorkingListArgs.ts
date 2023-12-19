import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WorkingListCreateInput } from "../../../inputs/WorkingListCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneWorkingListArgs {
  @TypeGraphQL.Field(_type => WorkingListCreateInput, {
    nullable: false
  })
  data!: WorkingListCreateInput;
}
