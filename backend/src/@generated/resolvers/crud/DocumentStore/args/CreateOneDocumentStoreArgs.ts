import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DocumentStoreCreateInput } from "../../../inputs/DocumentStoreCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneDocumentStoreArgs {
  @TypeGraphQL.Field(_type => DocumentStoreCreateInput, {
    nullable: false
  })
  data!: DocumentStoreCreateInput;
}
