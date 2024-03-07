import * as TypeGraphQL from "type-graphql";

export enum EventCategory {
  FOLDER = "FOLDER",
  DOCUMENT = "DOCUMENT"
}
TypeGraphQL.registerEnumType(EventCategory, {
  name: "EventCategory",
  description: undefined,
});
