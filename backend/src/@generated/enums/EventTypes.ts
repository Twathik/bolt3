import * as TypeGraphQL from "type-graphql";

export enum EventTypes {
  DIAGNOSTIC = "DIAGNOSTIC",
  HISTORY = "HISTORY",
  CLINICALEXAM = "CLINICALEXAM",
  ECG = "ECG",
  SONOGRAPHY = "SONOGRAPHY",
  BIOLOGY = "BIOLOGY",
  PRESCRIPTION = "PRESCRIPTION",
  MEDICAL_REPORT = "MEDICAL_REPORT",
  CERTIFICAT = "CERTIFICAT"
}
TypeGraphQL.registerEnumType(EventTypes, {
  name: "EventTypes",
  description: undefined,
});
