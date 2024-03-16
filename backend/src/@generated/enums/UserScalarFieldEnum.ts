import * as TypeGraphQL from "type-graphql";

export enum UserScalarFieldEnum {
  id = "id",
  email = "email",
  userId = "userId",
  lastName = "lastName",
  firstName = "firstName",
  fullName = "fullName",
  avatarUrl = "avatarUrl",
  role = "role",
  phoneNumbers = "phoneNumbers",
  lastConnection = "lastConnection",
  searchApiKeyId = "searchApiKeyId",
  searchApiKey = "searchApiKey",
  editorKey = "editorKey",
  createdAt = "createdAt"
}
TypeGraphQL.registerEnumType(UserScalarFieldEnum, {
  name: "UserScalarFieldEnum",
  description: undefined,
});
