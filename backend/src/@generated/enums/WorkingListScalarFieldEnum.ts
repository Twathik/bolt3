import * as TypeGraphQL from "type-graphql";

export enum WorkingListScalarFieldEnum {
  id = "id",
  patientId = "patientId",
  modalityId = "modalityId",
  userId = "userId",
  clinicalEventId = "clinicalEventId",
  modalityExamStatus = "modalityExamStatus",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  linked = "linked",
  linkId = "linkId",
  locked = "locked"
}
TypeGraphQL.registerEnumType(WorkingListScalarFieldEnum, {
  name: "WorkingListScalarFieldEnum",
  description: undefined,
});
