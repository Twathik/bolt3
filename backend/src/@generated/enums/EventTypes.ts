import * as TypeGraphQL from "type-graphql";

export enum EventTypes {
  CLINICAL_VISIT = "CLINICAL_VISIT",
  PRESCRIPTION = "PRESCRIPTION",
  GENERAL_SONO = "GENERAL_SONO"
}
TypeGraphQL.registerEnumType(EventTypes, {
  name: "EventTypes",
  description: undefined,
});
