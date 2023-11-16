import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DocumentTemplateUpdateInput } from "../../../inputs/DocumentTemplateUpdateInput";
import { DocumentTemplateWhereUniqueInput } from "../../../inputs/DocumentTemplateWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneDocumentTemplateArgs {
  @TypeGraphQL.Field(_type => DocumentTemplateUpdateInput, {
    nullable: false
  })
  data!: DocumentTemplateUpdateInput;

  @TypeGraphQL.Field(_type => DocumentTemplateWhereUniqueInput, {
    nullable: false
  })
  where!: DocumentTemplateWhereUniqueInput;
}
