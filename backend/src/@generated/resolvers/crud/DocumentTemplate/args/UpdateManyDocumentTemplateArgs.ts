import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DocumentTemplateUpdateManyMutationInput } from "../../../inputs/DocumentTemplateUpdateManyMutationInput";
import { DocumentTemplateWhereInput } from "../../../inputs/DocumentTemplateWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyDocumentTemplateArgs {
  @TypeGraphQL.Field(_type => DocumentTemplateUpdateManyMutationInput, {
    nullable: false
  })
  data!: DocumentTemplateUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => DocumentTemplateWhereInput, {
    nullable: true
  })
  where?: DocumentTemplateWhereInput | undefined;
}
