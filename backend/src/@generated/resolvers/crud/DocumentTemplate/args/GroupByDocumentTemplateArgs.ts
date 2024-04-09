import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DocumentTemplateOrderByWithAggregationInput } from "../../../inputs/DocumentTemplateOrderByWithAggregationInput";
import { DocumentTemplateScalarWhereWithAggregatesInput } from "../../../inputs/DocumentTemplateScalarWhereWithAggregatesInput";
import { DocumentTemplateWhereInput } from "../../../inputs/DocumentTemplateWhereInput";
import { DocumentTemplateScalarFieldEnum } from "../../../../enums/DocumentTemplateScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByDocumentTemplateArgs {
  @TypeGraphQL.Field(_type => DocumentTemplateWhereInput, {
    nullable: true
  })
  where?: DocumentTemplateWhereInput | undefined;

  @TypeGraphQL.Field(_type => [DocumentTemplateOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: DocumentTemplateOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [DocumentTemplateScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "templateName" | "evenTemplateUrl" | "eventDoxTemplate" | "oddTemplateUrl" | "oddDoxTemplate" | "templateSpeciality" | "createdAt">;

  @TypeGraphQL.Field(_type => DocumentTemplateScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: DocumentTemplateScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
