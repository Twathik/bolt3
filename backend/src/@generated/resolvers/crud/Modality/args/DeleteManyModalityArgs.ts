import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ModalityWhereInput } from "../../../inputs/ModalityWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyModalityArgs {
  @TypeGraphQL.Field(_type => ModalityWhereInput, {
    nullable: true
  })
  where?: ModalityWhereInput | undefined;
}
