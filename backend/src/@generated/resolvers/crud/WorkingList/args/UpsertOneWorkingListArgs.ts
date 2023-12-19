import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WorkingListCreateInput } from "../../../inputs/WorkingListCreateInput";
import { WorkingListUpdateInput } from "../../../inputs/WorkingListUpdateInput";
import { WorkingListWhereUniqueInput } from "../../../inputs/WorkingListWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneWorkingListArgs {
  @TypeGraphQL.Field(_type => WorkingListWhereUniqueInput, {
    nullable: false
  })
  where!: WorkingListWhereUniqueInput;

  @TypeGraphQL.Field(_type => WorkingListCreateInput, {
    nullable: false
  })
  create!: WorkingListCreateInput;

  @TypeGraphQL.Field(_type => WorkingListUpdateInput, {
    nullable: false
  })
  update!: WorkingListUpdateInput;
}
