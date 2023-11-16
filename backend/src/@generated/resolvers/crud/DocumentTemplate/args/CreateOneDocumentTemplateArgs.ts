import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DocumentTemplateCreateInput } from "../../../inputs/DocumentTemplateCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneDocumentTemplateArgs {
  @TypeGraphQL.Field(_type => DocumentTemplateCreateInput, {
    nullable: false
  })
  data!: DocumentTemplateCreateInput;
}
