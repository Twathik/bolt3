import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DocumentTemplateCreateManyInput } from "../../../inputs/DocumentTemplateCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyDocumentTemplateArgs {
  @TypeGraphQL.Field(_type => [DocumentTemplateCreateManyInput], {
    nullable: false
  })
  data!: DocumentTemplateCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
