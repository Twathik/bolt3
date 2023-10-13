import * as TypeGraphQL from "type-graphql";

export enum MobileDeviceScalarFieldEnum {
  id = "id",
  uuid = "uuid",
  accessToken = "accessToken",
  mobileDeviceType = "mobileDeviceType",
  expireAt = "expireAt",
  connected = "connected"
}
TypeGraphQL.registerEnumType(MobileDeviceScalarFieldEnum, {
  name: "MobileDeviceScalarFieldEnum",
  description: undefined,
});
