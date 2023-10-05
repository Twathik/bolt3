import * as TypeGraphQL from "type-graphql";

export enum PatientScalarFieldEnum {
  id = "id",
  lastName = "lastName",
  firstName = "firstName",
  fullName = "fullName",
  ddn = "ddn",
  sexe = "sexe",
  nTel = "nTel",
  created = "created",
  updated = "updated",
  deleted = "deleted"
}
TypeGraphQL.registerEnumType(PatientScalarFieldEnum, {
  name: "PatientScalarFieldEnum",
  description: undefined,
});
