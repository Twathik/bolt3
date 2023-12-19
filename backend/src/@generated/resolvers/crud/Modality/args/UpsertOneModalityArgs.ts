import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ModalityCreateInput } from "../../../inputs/ModalityCreateInput";
import { ModalityUpdateInput } from "../../../inputs/ModalityUpdateInput";
import { ModalityWhereUniqueInput } from "../../../inputs/ModalityWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneModalityArgs {
  @TypeGraphQL.Field(_type => ModalityWhereUniqueInput, {
    nullable: false
  })
  where!: ModalityWhereUniqueInput;

  @TypeGraphQL.Field(_type => ModalityCreateInput, {
    nullable: false
  })
  create!: ModalityCreateInput;

  @TypeGraphQL.Field(_type => ModalityUpdateInput, {
    nullable: false
  })
  update!: ModalityUpdateInput;
}
