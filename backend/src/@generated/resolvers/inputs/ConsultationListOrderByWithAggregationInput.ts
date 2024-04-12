import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationListCountOrderByAggregateInput } from "../inputs/ConsultationListCountOrderByAggregateInput";
import { ConsultationListMaxOrderByAggregateInput } from "../inputs/ConsultationListMaxOrderByAggregateInput";
import { ConsultationListMinOrderByAggregateInput } from "../inputs/ConsultationListMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ConsultationListOrderByWithAggregationInput", {})
export class ConsultationListOrderByWithAggregationInput {
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
  active?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  consultationDate?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ConsultationListCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ConsultationListCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ConsultationListMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ConsultationListMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ConsultationListMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ConsultationListMinOrderByAggregateInput | undefined;
}
