import * as TypeGraphQL from "type-graphql";

export enum MobileDeviceType {
  DOCTOR = "DOCTOR",
  SECRETARY = "SECRETARY"
}
TypeGraphQL.registerEnumType(MobileDeviceType, {
  name: "MobileDeviceType",
  description: undefined,
});
