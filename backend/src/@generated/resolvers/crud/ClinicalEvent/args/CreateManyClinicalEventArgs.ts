import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ClinicalEventCreateManyInput } from "../../../inputs/ClinicalEventCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyClinicalEventArgs {
  @TypeGraphQL.Field(_type => [ClinicalEventCreateManyInput], {
    nullable: false
  })
  data!: ClinicalEventCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
