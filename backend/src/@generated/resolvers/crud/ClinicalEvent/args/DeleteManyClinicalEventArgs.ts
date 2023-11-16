import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ClinicalEventWhereInput } from "../../../inputs/ClinicalEventWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyClinicalEventArgs {
  @TypeGraphQL.Field(_type => ClinicalEventWhereInput, {
    nullable: true
  })
  where?: ClinicalEventWhereInput | undefined;
}
