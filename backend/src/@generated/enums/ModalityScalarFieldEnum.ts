import * as TypeGraphQL from "type-graphql";

export enum ModalityScalarFieldEnum {
  id = "id",
  modalityName = "modalityName",
  modalityPseudo = "modalityPseudo",
  modalityAETitle = "modalityAETitle",
  modalityIpAddress = "modalityIpAddress",
  modalityType = "modalityType",
  modalityPort = "modalityPort",
  deleted = "deleted",
  activated = "activated",
  enabled = "enabled"
}
TypeGraphQL.registerEnumType(ModalityScalarFieldEnum, {
  name: "ModalityScalarFieldEnum",
  description: undefined,
});
