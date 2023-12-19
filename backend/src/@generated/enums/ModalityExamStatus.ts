import * as TypeGraphQL from "type-graphql";

export enum ModalityExamStatus {
  CREATED = "CREATED",
  INPROGRESS = "INPROGRESS",
  REALIZED = "REALIZED",
  REPORT_DONE = "REPORT_DONE",
  CLOSED = "CLOSED"
}
TypeGraphQL.registerEnumType(ModalityExamStatus, {
  name: "ModalityExamStatus",
  description: undefined,
});
