import * as TypeGraphQL from "type-graphql";

export enum EventTypes {
  DIAGNOSTIC = "DIAGNOSTIC",
  PRESCRIPTION = "PRESCRIPTION",
  GENERAL_SONO = "GENERAL_SONO"
}
TypeGraphQL.registerEnumType(EventTypes, {
  name: "EventTypes",
  description: undefined,
});
