import * as TypeGraphQL from "type-graphql";

export enum PatientDocumentType {
  folder = "folder",
  document = "document"
}
TypeGraphQL.registerEnumType(PatientDocumentType, {
  name: "PatientDocumentType",
  description: undefined,
});
