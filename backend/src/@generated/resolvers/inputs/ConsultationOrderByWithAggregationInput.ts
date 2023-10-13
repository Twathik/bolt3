import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationAvgOrderByAggregateInput } from "../inputs/ConsultationAvgOrderByAggregateInput";
import { ConsultationCountOrderByAggregateInput } from "../inputs/ConsultationCountOrderByAggregateInput";
import { ConsultationMaxOrderByAggregateInput } from "../inputs/ConsultationMaxOrderByAggregateInput";
import { ConsultationMinOrderByAggregateInput } from "../inputs/ConsultationMinOrderByAggregateInput";
import { ConsultationSumOrderByAggregateInput } from "../inputs/ConsultationSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ConsultationOrderByWithAggregationInput", {})
export class ConsultationOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  day?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  month?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  year?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ConsultationCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ConsultationCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ConsultationAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ConsultationAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ConsultationMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ConsultationMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ConsultationMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ConsultationMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ConsultationSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ConsultationSumOrderByAggregateInput | undefined;
}
