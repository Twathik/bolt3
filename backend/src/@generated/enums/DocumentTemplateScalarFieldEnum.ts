import * as TypeGraphQL from "type-graphql";

export enum DocumentTemplateScalarFieldEnum {
  id = "id",
  eventType = "eventType",
  template = "template",
  empty = "empty"
}
TypeGraphQL.registerEnumType(DocumentTemplateScalarFieldEnum, {
  name: "DocumentTemplateScalarFieldEnum",
  description: undefined,
});
