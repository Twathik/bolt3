import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DocumentTemplateCountOrderByAggregateInput } from "../inputs/DocumentTemplateCountOrderByAggregateInput";
import { DocumentTemplateMaxOrderByAggregateInput } from "../inputs/DocumentTemplateMaxOrderByAggregateInput";
import { DocumentTemplateMinOrderByAggregateInput } from "../inputs/DocumentTemplateMinOrderByAggregateInput";
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
  eventType?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  template?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  empty?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => DocumentTemplateCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: DocumentTemplateCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => DocumentTemplateMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: DocumentTemplateMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => DocumentTemplateMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: DocumentTemplateMinOrderByAggregateInput | undefined;
}
