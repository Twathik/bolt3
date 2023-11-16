import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DocumentTemplateCreateInput } from "../../../inputs/DocumentTemplateCreateInput";
import { DocumentTemplateUpdateInput } from "../../../inputs/DocumentTemplateUpdateInput";
import { DocumentTemplateWhereUniqueInput } from "../../../inputs/DocumentTemplateWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneDocumentTemplateArgs {
  @TypeGraphQL.Field(_type => DocumentTemplateWhereUniqueInput, {
    nullable: false
  })
  where!: DocumentTemplateWhereUniqueInput;

  @TypeGraphQL.Field(_type => DocumentTemplateCreateInput, {
    nullable: false
  })
  create!: DocumentTemplateCreateInput;

  @TypeGraphQL.Field(_type => DocumentTemplateUpdateInput, {
    nullable: false
  })
  update!: DocumentTemplateUpdateInput;
}
