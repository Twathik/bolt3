import * as TypeGraphQL from "type-graphql";

export enum DocumentStoreScalarFieldEnum {
  id = "id",
  patientId = "patientId",
  patientDocumentType = "patientDocumentType",
  content = "content"
}
TypeGraphQL.registerEnumType(DocumentStoreScalarFieldEnum, {
  name: "DocumentStoreScalarFieldEnum",
  description: undefined,
});
