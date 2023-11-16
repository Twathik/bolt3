import * as TypeGraphQL from "type-graphql";

export enum PrescriptionScalarFieldEnum {
  id = "id",
  clinicalEventId = "clinicalEventId",
  savedPrescription = "savedPrescription",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(PrescriptionScalarFieldEnum, {
  name: "PrescriptionScalarFieldEnum",
  description: undefined,
});
