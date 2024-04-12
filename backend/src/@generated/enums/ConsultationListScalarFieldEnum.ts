import * as TypeGraphQL from "type-graphql";

export enum ConsultationListScalarFieldEnum {
  id = "id",
  patientId = "patientId",
  active = "active",
  consultationDate = "consultationDate",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(ConsultationListScalarFieldEnum, {
  name: "ConsultationListScalarFieldEnum",
  description: undefined,
});
