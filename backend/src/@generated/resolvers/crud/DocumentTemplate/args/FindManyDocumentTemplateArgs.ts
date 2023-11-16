import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DocumentTemplateOrderByWithRelationInput } from "../../../inputs/DocumentTemplateOrderByWithRelationInput";
import { DocumentTemplateWhereInput } from "../../../inputs/DocumentTemplateWhereInput";
import { DocumentTemplateWhereUniqueInput } from "../../../inputs/DocumentTemplateWhereUniqueInput";
import { DocumentTemplateScalarFieldEnum } from "../../../../enums/DocumentTemplateScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyDocumentTemplateArgs {
  @TypeGraphQL.Field(_type => DocumentTemplateWhereInput, {
    nullable: true
  })
  where?: DocumentTemplateWhereInput | undefined;

  @TypeGraphQL.Field(_type => [DocumentTemplateOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: DocumentTemplateOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => DocumentTemplateWhereUniqueInput, {
    nullable: true
  })
  cursor?: DocumentTemplateWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [DocumentTemplateScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "eventType" | "template" | "empty"> | undefined;
}
