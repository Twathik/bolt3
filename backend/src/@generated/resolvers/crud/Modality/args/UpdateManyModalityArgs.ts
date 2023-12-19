import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ModalityUpdateManyMutationInput } from "../../../inputs/ModalityUpdateManyMutationInput";
import { ModalityWhereInput } from "../../../inputs/ModalityWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyModalityArgs {
  @TypeGraphQL.Field(_type => ModalityUpdateManyMutationInput, {
    nullable: false
  })
  data!: ModalityUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ModalityWhereInput, {
    nullable: true
  })
  where?: ModalityWhereInput | undefined;
}
