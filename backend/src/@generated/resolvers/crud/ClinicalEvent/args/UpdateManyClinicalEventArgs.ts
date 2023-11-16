import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ClinicalEventUpdateManyMutationInput } from "../../../inputs/ClinicalEventUpdateManyMutationInput";
import { ClinicalEventWhereInput } from "../../../inputs/ClinicalEventWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyClinicalEventArgs {
  @TypeGraphQL.Field(_type => ClinicalEventUpdateManyMutationInput, {
    nullable: false
  })
  data!: ClinicalEventUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ClinicalEventWhereInput, {
    nullable: true
  })
  where?: ClinicalEventWhereInput | undefined;
}
