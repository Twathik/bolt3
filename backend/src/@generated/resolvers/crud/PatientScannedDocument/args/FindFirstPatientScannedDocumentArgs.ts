import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PatientScannedDocumentOrderByWithRelationInput } from "../../../inputs/PatientScannedDocumentOrderByWithRelationInput";
import { PatientScannedDocumentWhereInput } from "../../../inputs/PatientScannedDocumentWhereInput";
import { PatientScannedDocumentWhereUniqueInput } from "../../../inputs/PatientScannedDocumentWhereUniqueInput";
import { PatientScannedDocumentScalarFieldEnum } from "../../../../enums/PatientScannedDocumentScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstPatientScannedDocumentArgs {
  @TypeGraphQL.Field(_type => PatientScannedDocumentWhereInput, {
    nullable: true
  })
  where?: PatientScannedDocumentWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PatientScannedDocumentOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PatientScannedDocumentOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PatientScannedDocumentWhereUniqueInput, {
    nullable: true
  })
  cursor?: PatientScannedDocumentWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [PatientScannedDocumentScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "documentCollectionName" | "documentCollectionUrls" | "documentCollectionDate" | "createdAt" | "patientId"> | undefined;
}
