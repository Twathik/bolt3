import * as TypeGraphQL from "type-graphql";

export enum PatientScalarFieldEnum {
  id = "id",
  lastName = "lastName",
  firstName = "firstName",
  ddn = "ddn",
  sexe = "sexe",
  nTel = "nTel",
  createdAt = "createdAt",
  updated = "updated",
  deleted = "deleted"
}
TypeGraphQL.registerEnumType(PatientScalarFieldEnum, {
  name: "PatientScalarFieldEnum",
  description: undefined,
});
