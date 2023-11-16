import * as TypeGraphQL from "type-graphql";

export enum ClinicalEventScalarFieldEnum {
  id = "id",
  eventType = "eventType",
  userId = "userId",
  patientId = "patientId",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  onTrash = "onTrash",
  deleted = "deleted",
  empty = "empty",
  createdReport = "createdReport",
  report = "report",
  dicom = "dicom",
  dicomId = "dicomId",
  clinicalDiagnosticId = "clinicalDiagnosticId"
}
TypeGraphQL.registerEnumType(ClinicalEventScalarFieldEnum, {
  name: "ClinicalEventScalarFieldEnum",
  description: undefined,
});
