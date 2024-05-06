import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientScannedDocumentCountOrderByAggregateInput } from "../inputs/PatientScannedDocumentCountOrderByAggregateInput";
import { PatientScannedDocumentMaxOrderByAggregateInput } from "../inputs/PatientScannedDocumentMaxOrderByAggregateInput";
import { PatientScannedDocumentMinOrderByAggregateInput } from "../inputs/PatientScannedDocumentMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PatientScannedDocumentOrderByWithAggregationInput", {})
export class PatientScannedDocumentOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  documentCollectionName?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  documentCollectionUrls?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  documentCollectionDate?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  patientId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PatientScannedDocumentCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PatientScannedDocumentCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PatientScannedDocumentMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PatientScannedDocumentMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PatientScannedDocumentMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PatientScannedDocumentMinOrderByAggregateInput | undefined;
}
