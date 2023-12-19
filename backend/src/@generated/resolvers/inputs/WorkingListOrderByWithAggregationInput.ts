import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { WorkingListCountOrderByAggregateInput } from "../inputs/WorkingListCountOrderByAggregateInput";
import { WorkingListMaxOrderByAggregateInput } from "../inputs/WorkingListMaxOrderByAggregateInput";
import { WorkingListMinOrderByAggregateInput } from "../inputs/WorkingListMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("WorkingListOrderByWithAggregationInput", {})
export class WorkingListOrderByWithAggregationInput {
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
  modalityId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  clinicalEventId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  modalityExamStatus?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  linked?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  linkId?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  locked?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => WorkingListCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: WorkingListCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => WorkingListMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: WorkingListMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => WorkingListMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: WorkingListMinOrderByAggregateInput | undefined;
}
