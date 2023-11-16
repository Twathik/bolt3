import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ClinicalEventCreateInput } from "../../../inputs/ClinicalEventCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneClinicalEventArgs {
  @TypeGraphQL.Field(_type => ClinicalEventCreateInput, {
    nullable: false
  })
  data!: ClinicalEventCreateInput;
}
