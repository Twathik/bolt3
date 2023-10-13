import * as TypeGraphQL from "type-graphql";

export enum ConsultationListScalarFieldEnum {
  id = "id",
  patientId = "patientId",
  consultationId = "consultationId",
  active = "active",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(ConsultationListScalarFieldEnum, {
  name: "ConsultationListScalarFieldEnum",
  description: undefined,
});
