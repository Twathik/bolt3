import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DocumentStoreWhereUniqueInput } from "../../../inputs/DocumentStoreWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueDocumentStoreOrThrowArgs {
  @TypeGraphQL.Field(_type => DocumentStoreWhereUniqueInput, {
    nullable: false
  })
  where!: DocumentStoreWhereUniqueInput;
}
