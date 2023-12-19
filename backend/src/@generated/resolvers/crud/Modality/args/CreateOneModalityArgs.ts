import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ModalityCreateInput } from "../../../inputs/ModalityCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneModalityArgs {
  @TypeGraphQL.Field(_type => ModalityCreateInput, {
    nullable: false
  })
  data!: ModalityCreateInput;
}
