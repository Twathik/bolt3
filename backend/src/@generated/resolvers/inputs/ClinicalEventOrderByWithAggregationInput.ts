import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClinicalEventCountOrderByAggregateInput } from "../inputs/ClinicalEventCountOrderByAggregateInput";
import { ClinicalEventMaxOrderByAggregateInput } from "../inputs/ClinicalEventMaxOrderByAggregateInput";
import { ClinicalEventMinOrderByAggregateInput } from "../inputs/ClinicalEventMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ClinicalEventOrderByWithAggregationInput", {})
export class ClinicalEventOrderByWithAggregationInput {
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
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  patientId?: "asc" | "desc" | undefined;

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
  onTrash?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  deleted?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  empty?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdReport?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  report?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  dicom?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  dicomId?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  clinicalDiagnosticId?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => ClinicalEventCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ClinicalEventCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ClinicalEventMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ClinicalEventMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ClinicalEventMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ClinicalEventMinOrderByAggregateInput | undefined;
}
