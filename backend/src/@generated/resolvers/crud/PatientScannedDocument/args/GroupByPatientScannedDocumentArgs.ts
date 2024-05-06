import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PatientScannedDocumentOrderByWithAggregationInput } from "../../../inputs/PatientScannedDocumentOrderByWithAggregationInput";
import { PatientScannedDocumentScalarWhereWithAggregatesInput } from "../../../inputs/PatientScannedDocumentScalarWhereWithAggregatesInput";
import { PatientScannedDocumentWhereInput } from "../../../inputs/PatientScannedDocumentWhereInput";
import { PatientScannedDocumentScalarFieldEnum } from "../../../../enums/PatientScannedDocumentScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPatientScannedDocumentArgs {
  @TypeGraphQL.Field(_type => PatientScannedDocumentWhereInput, {
    nullable: true
  })
  where?: PatientScannedDocumentWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PatientScannedDocumentOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PatientScannedDocumentOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PatientScannedDocumentScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "documentCollectionName" | "documentCollectionUrls" | "documentCollectionDate" | "createdAt" | "patientId">;

  @TypeGraphQL.Field(_type => PatientScannedDocumentScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PatientScannedDocumentScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
