import * as TypeGraphQL from "type-graphql";

export enum TemplateSpeciality {
  CARDIOLOGY = "CARDIOLOGY",
  GYNECOLOGY = "GYNECOLOGY"
}
TypeGraphQL.registerEnumType(TemplateSpeciality, {
  name: "TemplateSpeciality",
  description: undefined,
});
