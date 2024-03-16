import type { PublicUser } from "@/components/wg-generated/client";
import type { UsersGetUserResponseData } from "@/components/wg-generated/models";

const getUserState = (
  user: PublicUser
): UsersGetUserResponseData["mainDb_user"] => ({
  searchApiKey: user.customClaims?.searchApiKey ?? "",
  avatarUrl: user.customClaims?.avatarUrl ?? "",
  firstName: user.firstName,
  lastName: user.lastName,
  fullName: user.name,
  editorApiKey: user.customClaims?.editorApiKey ?? "",
});

export default getUserState;
