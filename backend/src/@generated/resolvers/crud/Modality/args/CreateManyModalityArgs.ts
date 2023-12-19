import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ModalityCreateManyInput } from "../../../inputs/ModalityCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyModalityArgs {
  @TypeGraphQL.Field(_type => [ModalityCreateManyInput], {
    nullable: false
  })
  data!: ModalityCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
