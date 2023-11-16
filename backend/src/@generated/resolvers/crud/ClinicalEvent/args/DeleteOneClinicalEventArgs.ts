import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ClinicalEventWhereUniqueInput } from "../../../inputs/ClinicalEventWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneClinicalEventArgs {
  @TypeGraphQL.Field(_type => ClinicalEventWhereUniqueInput, {
    nullable: false
  })
  where!: ClinicalEventWhereUniqueInput;
}
