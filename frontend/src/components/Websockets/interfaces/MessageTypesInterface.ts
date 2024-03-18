export type MessageType =
  | "secondaryDisplay"
  | "patient"
  | "subscribe"
  | "welcome"
  | "emptyTrash"
  | "modality"
  | "mobileDevice"
  | "workingList"
  | "consultationList";

export interface RootMessageInterface {
  type: MessageType;
  global: boolean;
  subscriptionIds: string[];
  destination: (
    | "secondary-display"
    | "folder"
    | "mobileDevices"
    | "modality"
    | "trash"
  )[];
}

export const notificationTopic = "bolt3notifications";
