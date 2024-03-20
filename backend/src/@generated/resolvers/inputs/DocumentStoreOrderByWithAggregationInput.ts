import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DocumentStoreCountOrderByAggregateInput } from "../inputs/DocumentStoreCountOrderByAggregateInput";
import { DocumentStoreMaxOrderByAggregateInput } from "../inputs/DocumentStoreMaxOrderByAggregateInput";
import { DocumentStoreMinOrderByAggregateInput } from "../inputs/DocumentStoreMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("DocumentStoreOrderByWithAggregationInput", {})
export class DocumentStoreOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  patientId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  patientDocumentType?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  content?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => DocumentStoreCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: DocumentStoreCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => DocumentStoreMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: DocumentStoreMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => DocumentStoreMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: DocumentStoreMinOrderByAggregateInput | undefined;
}
