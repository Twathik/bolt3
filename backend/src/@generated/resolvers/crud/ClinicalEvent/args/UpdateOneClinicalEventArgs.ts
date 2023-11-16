import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ClinicalEventUpdateInput } from "../../../inputs/ClinicalEventUpdateInput";
import { ClinicalEventWhereUniqueInput } from "../../../inputs/ClinicalEventWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneClinicalEventArgs {
  @TypeGraphQL.Field(_type => ClinicalEventUpdateInput, {
    nullable: false
  })
  data!: ClinicalEventUpdateInput;

  @TypeGraphQL.Field(_type => ClinicalEventWhereUniqueInput, {
    nullable: false
  })
  where!: ClinicalEventWhereUniqueInput;
}
