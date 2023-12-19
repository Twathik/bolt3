import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WorkingListWhereUniqueInput } from "../../../inputs/WorkingListWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueWorkingListArgs {
  @TypeGraphQL.Field(_type => WorkingListWhereUniqueInput, {
    nullable: false
  })
  where!: WorkingListWhereUniqueInput;
}
