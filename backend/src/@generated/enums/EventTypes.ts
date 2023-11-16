import * as TypeGraphQL from "type-graphql";

export enum EventTypes {
  DIAGNOSTIC = "DIAGNOSTIC",
  PRESCRIPTION = "PRESCRIPTION"
}
TypeGraphQL.registerEnumType(EventTypes, {
  name: "EventTypes",
  description: undefined,
});
