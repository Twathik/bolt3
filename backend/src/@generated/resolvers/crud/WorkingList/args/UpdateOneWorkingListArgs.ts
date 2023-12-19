import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WorkingListUpdateInput } from "../../../inputs/WorkingListUpdateInput";
import { WorkingListWhereUniqueInput } from "../../../inputs/WorkingListWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneWorkingListArgs {
  @TypeGraphQL.Field(_type => WorkingListUpdateInput, {
    nullable: false
  })
  data!: WorkingListUpdateInput;

  @TypeGraphQL.Field(_type => WorkingListWhereUniqueInput, {
    nullable: false
  })
  where!: WorkingListWhereUniqueInput;
}
