import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DocumentStoreUpdateManyMutationInput } from "../../../inputs/DocumentStoreUpdateManyMutationInput";
import { DocumentStoreWhereInput } from "../../../inputs/DocumentStoreWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyDocumentStoreArgs {
  @TypeGraphQL.Field(_type => DocumentStoreUpdateManyMutationInput, {
    nullable: false
  })
  data!: DocumentStoreUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => DocumentStoreWhereInput, {
    nullable: true
  })
  where?: DocumentStoreWhereInput | undefined;
}
