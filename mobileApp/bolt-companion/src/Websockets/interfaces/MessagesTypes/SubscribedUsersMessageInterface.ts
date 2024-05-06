import type { RootMessageInterface } from "../MessageTypesInterface";

type SubscribedUsersMessagePayloadOperationType =
  | "subscribe"
  | "leave"
  | "sync";

export type subscribedUsers = {
  fullName: string;
  id: string;
  color: string;
};

interface RootSubscribedUsersMessagePayload {
  operation: SubscribedUsersMessagePayloadOperationType;
}

interface SubscribedUsersUpdateMessagePayload
  extends RootSubscribedUsersMessagePayload {
  operation: "subscribe" | "leave";
  subscribedUser: subscribedUsers;
}

interface SyncSubscribedUsers extends RootSubscribedUsersMessagePayload {
  operation: "sync";
  subscribedUsers: subscribedUsers[];
}

type SubscribedUsersMessagePayload =
  | SubscribedUsersUpdateMessagePayload
  | SyncSubscribedUsers;

export interface SubscribedUsersMessageInterface extends RootMessageInterface {
  type: "subscribedUsers";
  payload: SubscribedUsersMessagePayload;
}
