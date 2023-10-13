import * as TypeGraphQL from "type-graphql";

export enum ConsultationScalarFieldEnum {
  id = "id",
  day = "day",
  month = "month",
  year = "year",
  createdAt = "createdAt"
}
TypeGraphQL.registerEnumType(ConsultationScalarFieldEnum, {
  name: "ConsultationScalarFieldEnum",
  description: undefined,
});
