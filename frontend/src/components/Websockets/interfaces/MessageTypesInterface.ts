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
  | "clinicalEvent"
  | "focused-clinical-event";

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
  | "focused-clinical-event"
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
