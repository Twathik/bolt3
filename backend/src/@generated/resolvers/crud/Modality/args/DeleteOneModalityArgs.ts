import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ModalityWhereUniqueInput } from "../../../inputs/ModalityWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneModalityArgs {
  @TypeGraphQL.Field(_type => ModalityWhereUniqueInput, {
    nullable: false
  })
  where!: ModalityWhereUniqueInput;
}
