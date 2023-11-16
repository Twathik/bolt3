import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PrescriptionCountOrderByAggregateInput } from "../inputs/PrescriptionCountOrderByAggregateInput";
import { PrescriptionMaxOrderByAggregateInput } from "../inputs/PrescriptionMaxOrderByAggregateInput";
import { PrescriptionMinOrderByAggregateInput } from "../inputs/PrescriptionMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PrescriptionOrderByWithAggregationInput", {})
export class PrescriptionOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  clinicalEventId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  savedPrescription?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PrescriptionCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PrescriptionCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PrescriptionMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PrescriptionMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PrescriptionMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PrescriptionMinOrderByAggregateInput | undefined;
}
