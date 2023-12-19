import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ModalityAvgOrderByAggregateInput } from "../inputs/ModalityAvgOrderByAggregateInput";
import { ModalityCountOrderByAggregateInput } from "../inputs/ModalityCountOrderByAggregateInput";
import { ModalityMaxOrderByAggregateInput } from "../inputs/ModalityMaxOrderByAggregateInput";
import { ModalityMinOrderByAggregateInput } from "../inputs/ModalityMinOrderByAggregateInput";
import { ModalitySumOrderByAggregateInput } from "../inputs/ModalitySumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ModalityOrderByWithAggregationInput", {})
export class ModalityOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  modalityName?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  modalityPseudo?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  modalityAETitle?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  modalityIpAddress?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  modalityType?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  modalityPort?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  deleted?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  activated?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  enabled?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ModalityCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ModalityCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ModalityAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ModalityAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ModalityMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ModalityMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ModalityMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ModalityMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ModalitySumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ModalitySumOrderByAggregateInput | undefined;
}
