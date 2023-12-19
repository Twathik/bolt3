import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WorkingListCreateManyInput } from "../../../inputs/WorkingListCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyWorkingListArgs {
  @TypeGraphQL.Field(_type => [WorkingListCreateManyInput], {
    nullable: false
  })
  data!: WorkingListCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
