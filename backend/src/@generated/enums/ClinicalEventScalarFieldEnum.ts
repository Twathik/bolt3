import * as TypeGraphQL from "type-graphql";

export enum ClinicalEventScalarFieldEnum {
  id = "id",
  eventType = "eventType",
  eventCategory = "eventCategory",
  userId = "userId",
  patientId = "patientId",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  deleted = "deleted",
  deletedReport = "deletedReport",
  deletedByUserId = "deletedByUserId",
  dicom = "dicom",
  dicomId = "dicomId",
  clinicalDiagnosticId = "clinicalDiagnosticId"
}
TypeGraphQL.registerEnumType(ClinicalEventScalarFieldEnum, {
  name: "ClinicalEventScalarFieldEnum",
  description: undefined,
});
