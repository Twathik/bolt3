import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DocumentStoreUpdateInput } from "../../../inputs/DocumentStoreUpdateInput";
import { DocumentStoreWhereUniqueInput } from "../../../inputs/DocumentStoreWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneDocumentStoreArgs {
  @TypeGraphQL.Field(_type => DocumentStoreUpdateInput, {
    nullable: false
  })
  data!: DocumentStoreUpdateInput;

  @TypeGraphQL.Field(_type => DocumentStoreWhereUniqueInput, {
    nullable: false
  })
  where!: DocumentStoreWhereUniqueInput;
}
