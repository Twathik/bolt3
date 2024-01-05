import * as TypeGraphQL from "type-graphql";

export enum SettingScalarFieldEnum {
  id = "id",
  allowedMobileDevices_doctors = "allowedMobileDevices_doctors",
  allowedMobileDevices_secretary = "allowedMobileDevices_secretary",
  allowedDICOMmodalities = "allowedDICOMmodalities",
  allowedEventTypes = "allowedEventTypes"
}
TypeGraphQL.registerEnumType(SettingScalarFieldEnum, {
  name: "SettingScalarFieldEnum",
  description: undefined,
});
