import * as TypeGraphQL from "type-graphql";

export enum DocumentStoreScalarFieldEnum {
  id = "id",
  patientId = "patientId",
  clinicalData = "clinicalData",
  documentData = "documentData"
}
TypeGraphQL.registerEnumType(DocumentStoreScalarFieldEnum, {
  name: "DocumentStoreScalarFieldEnum",
  description: undefined,
});
