import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DocumentStoreCreateInput } from "../../../inputs/DocumentStoreCreateInput";
import { DocumentStoreUpdateInput } from "../../../inputs/DocumentStoreUpdateInput";
import { DocumentStoreWhereUniqueInput } from "../../../inputs/DocumentStoreWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneDocumentStoreArgs {
  @TypeGraphQL.Field(_type => DocumentStoreWhereUniqueInput, {
    nullable: false
  })
  where!: DocumentStoreWhereUniqueInput;

  @TypeGraphQL.Field(_type => DocumentStoreCreateInput, {
    nullable: false
  })
  create!: DocumentStoreCreateInput;

  @TypeGraphQL.Field(_type => DocumentStoreUpdateInput, {
    nullable: false
  })
  update!: DocumentStoreUpdateInput;
}
