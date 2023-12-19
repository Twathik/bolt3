import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ModalityUpdateInput } from "../../../inputs/ModalityUpdateInput";
import { ModalityWhereUniqueInput } from "../../../inputs/ModalityWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneModalityArgs {
  @TypeGraphQL.Field(_type => ModalityUpdateInput, {
    nullable: false
  })
  data!: ModalityUpdateInput;

  @TypeGraphQL.Field(_type => ModalityWhereUniqueInput, {
    nullable: false
  })
  where!: ModalityWhereUniqueInput;
}
