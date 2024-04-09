import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DocumentTemplateAvgOrderByAggregateInput } from "../inputs/DocumentTemplateAvgOrderByAggregateInput";
import { DocumentTemplateCountOrderByAggregateInput } from "../inputs/DocumentTemplateCountOrderByAggregateInput";
import { DocumentTemplateMaxOrderByAggregateInput } from "../inputs/DocumentTemplateMaxOrderByAggregateInput";
import { DocumentTemplateMinOrderByAggregateInput } from "../inputs/DocumentTemplateMinOrderByAggregateInput";
import { DocumentTemplateSumOrderByAggregateInput } from "../inputs/DocumentTemplateSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("DocumentTemplateOrderByWithAggregationInput", {})
export class DocumentTemplateOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  templateName?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  evenTemplateUrl?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  eventDoxTemplate?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  oddTemplateUrl?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  oddDoxTemplate?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  templateSpeciality?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => DocumentTemplateCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: DocumentTemplateCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => DocumentTemplateAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: DocumentTemplateAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => DocumentTemplateMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: DocumentTemplateMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => DocumentTemplateMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: DocumentTemplateMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => DocumentTemplateSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: DocumentTemplateSumOrderByAggregateInput | undefined;
}
