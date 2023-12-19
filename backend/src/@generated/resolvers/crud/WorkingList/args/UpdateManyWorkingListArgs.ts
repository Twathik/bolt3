import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WorkingListUpdateManyMutationInput } from "../../../inputs/WorkingListUpdateManyMutationInput";
import { WorkingListWhereInput } from "../../../inputs/WorkingListWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyWorkingListArgs {
  @TypeGraphQL.Field(_type => WorkingListUpdateManyMutationInput, {
    nullable: false
  })
  data!: WorkingListUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => WorkingListWhereInput, {
    nullable: true
  })
  where?: WorkingListWhereInput | undefined;
}
