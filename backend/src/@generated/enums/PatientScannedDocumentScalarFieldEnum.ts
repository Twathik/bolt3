import * as TypeGraphQL from "type-graphql";

export enum PatientScannedDocumentScalarFieldEnum {
  id = "id",
  documentCollectionName = "documentCollectionName",
  documentCollectionUrls = "documentCollectionUrls",
  documentCollectionDate = "documentCollectionDate",
  createdAt = "createdAt",
  patientId = "patientId"
}
TypeGraphQL.registerEnumType(PatientScannedDocumentScalarFieldEnum, {
  name: "PatientScannedDocumentScalarFieldEnum",
  description: undefined,
});
