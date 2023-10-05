import * as TypeGraphQL from "type-graphql";

export enum Sexe {
  M = "M",
  F = "F"
}
TypeGraphQL.registerEnumType(Sexe, {
  name: "Sexe",
  description: undefined,
});
