import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DocumentTemplateWhereInput } from "../../../inputs/DocumentTemplateWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyDocumentTemplateArgs {
  @TypeGraphQL.Field(_type => DocumentTemplateWhereInput, {
    nullable: true
  })
  where?: DocumentTemplateWhereInput | undefined;
}
