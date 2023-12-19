import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WorkingListWhereInput } from "../../inputs/WorkingListWhereInput";

@TypeGraphQL.ArgsType()
export class ClinicalEventCountWorkingListArgs {
  @TypeGraphQL.Field(_type => WorkingListWhereInput, {
    nullable: true
  })
  where?: WorkingListWhereInput | undefined;
}
