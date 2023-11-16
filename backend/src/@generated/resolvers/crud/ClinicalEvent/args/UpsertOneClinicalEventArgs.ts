import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ClinicalEventCreateInput } from "../../../inputs/ClinicalEventCreateInput";
import { ClinicalEventUpdateInput } from "../../../inputs/ClinicalEventUpdateInput";
import { ClinicalEventWhereUniqueInput } from "../../../inputs/ClinicalEventWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneClinicalEventArgs {
  @TypeGraphQL.Field(_type => ClinicalEventWhereUniqueInput, {
    nullable: false
  })
  where!: ClinicalEventWhereUniqueInput;

  @TypeGraphQL.Field(_type => ClinicalEventCreateInput, {
    nullable: false
  })
  create!: ClinicalEventCreateInput;

  @TypeGraphQL.Field(_type => ClinicalEventUpdateInput, {
    nullable: false
  })
  update!: ClinicalEventUpdateInput;
}
