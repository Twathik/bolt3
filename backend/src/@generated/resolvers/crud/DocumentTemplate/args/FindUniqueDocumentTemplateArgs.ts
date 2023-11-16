import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DocumentTemplateWhereUniqueInput } from "../../../inputs/DocumentTemplateWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueDocumentTemplateArgs {
  @TypeGraphQL.Field(_type => DocumentTemplateWhereUniqueInput, {
    nullable: false
  })
  where!: DocumentTemplateWhereUniqueInput;
}
