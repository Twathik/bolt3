import type { PublicUser } from "@/components/wg-generated/client";
import type { BoltUser } from "@/stores/boltStoreType";

const getUserState = (user: PublicUser): BoltUser => ({
  userId: user.userId ?? "",
  searchApiKey: user.customClaims?.searchApiKey ?? "",
  avatarUrl: user.customClaims?.avatarUrl ?? "",
  firstName: user.firstName ?? "",
  lastName: user.lastName ?? "",
  fullName: user.name ?? "",
  editorApiKey: user.customClaims?.editorApiKey ?? "",
});

export default getUserState;
