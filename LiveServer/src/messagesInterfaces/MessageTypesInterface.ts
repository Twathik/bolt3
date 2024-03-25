export type MessageType =
  | "secondaryDisplay"
  | "patient"
  | "subscribe"
  | "welcome"
  | "emptyTrash"
  | "modality"
  | "mobileDevice"
  | "workingList"
  | "consultationList"
  | "subscribedUsers"
  | "clinicalEvent";

export type MessageDestination =
  | "secondary-display"
  | "folder"
  | "document"
  | "mobileDevices"
  | "modality"
  | "trash"
  | "folder-copy"
  | "document-copy"
  | "patient-information"
  | "focused-document"
  | "clinicalEvent"
  | "patient-full-information";

export interface RootMessageInterface {
  id: string;
  type: MessageType;
  global: boolean;
  subscriptionIds: string[];
  destination: MessageDestination[];
}

export const notificationTopic = "bolt3notifications";
