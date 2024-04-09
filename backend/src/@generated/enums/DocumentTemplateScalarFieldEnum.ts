import * as TypeGraphQL from "type-graphql";

export enum DocumentTemplateScalarFieldEnum {
  id = "id",
  templateName = "templateName",
  evenTemplateUrl = "evenTemplateUrl",
  eventDoxTemplate = "eventDoxTemplate",
  oddTemplateUrl = "oddTemplateUrl",
  oddDoxTemplate = "oddDoxTemplate",
  templateSpeciality = "templateSpeciality",
  createdAt = "createdAt"
}
TypeGraphQL.registerEnumType(DocumentTemplateScalarFieldEnum, {
  name: "DocumentTemplateScalarFieldEnum",
  description: undefined,
});
