import * as TypeGraphQL from "type-graphql";

export enum PatientScalarFieldEnum {
  id = "id",
  lastName = "lastName",
  firstName = "firstName",
  ddn = "ddn",
  sexe = "sexe",
  nTel = "nTel",
  address = "address",
  height = "height",
  weight = "weight",
  createdAt = "createdAt",
  updated = "updated",
  deleted = "deleted",
  onTrash = "onTrash",
  informationsConfirmed = "informationsConfirmed"
}
TypeGraphQL.registerEnumType(PatientScalarFieldEnum, {
  name: "PatientScalarFieldEnum",
  description: undefined,
});
