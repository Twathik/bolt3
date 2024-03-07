import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientAvgOrderByAggregateInput } from "../inputs/PatientAvgOrderByAggregateInput";
import { PatientCountOrderByAggregateInput } from "../inputs/PatientCountOrderByAggregateInput";
import { PatientMaxOrderByAggregateInput } from "../inputs/PatientMaxOrderByAggregateInput";
import { PatientMinOrderByAggregateInput } from "../inputs/PatientMinOrderByAggregateInput";
import { PatientSumOrderByAggregateInput } from "../inputs/PatientSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PatientOrderByWithAggregationInput", {})
export class PatientOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  lastName?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  firstName?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  ddn?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  sexe?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  nTel?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  address?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  height?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  weight?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updated?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  deleted?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  onTrash?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  informationsConfirmed?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  clinicalData?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  documentData?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => PatientCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PatientCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PatientAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: PatientAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PatientMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PatientMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PatientMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PatientMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PatientSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: PatientSumOrderByAggregateInput | undefined;
}
