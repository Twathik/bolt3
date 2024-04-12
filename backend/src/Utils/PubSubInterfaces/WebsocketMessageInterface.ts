import type { ClinicalEventMessageInterface } from "./MessagesTypes/ClinicalEventsMessageInterface";
import type { EmptyTrashMessageInterface } from "./MessagesTypes/EmptyTrashMessageInterface";
import type { FocusedClinicalEventMessageInterface } from "./MessagesTypes/FocusedClinicalEventMessageInterface";
import type { MobileDeviceMessageInterface } from "./MessagesTypes/MobileDeviceMessageInterface";
import type { ModalityMessageInterface } from "./MessagesTypes/ModalityMessageInterface";
import type { PatientMessageInterface } from "./MessagesTypes/PatientMessageInterface";
import type { PrescriptionMessageInterface } from "./MessagesTypes/PrescriptionMessageInterface";
import type { SecondaryDisplayMessageInterface } from "./MessagesTypes/SecondaryDisplayMessageInterface";
import type { SubscribeMessageInterface } from "./MessagesTypes/SubscribeMessageInterface";
import type { SubscribedUsersMessageInterface } from "./MessagesTypes/SubscribedUsersMessageInterface";
import type { WelcomeMessageInterface } from "./WelcomeMessageInterface";
import type { WorkingListMessageInterface } from "./MessagesTypes/WorkingListMessageInterface";
import type { ConsultationListMessageInterface } from "./MessagesTypes/ConsultationListMessageInterface";

export type WebsocketMessageInterface =
  | SecondaryDisplayMessageInterface
  | PatientMessageInterface
  | SubscribeMessageInterface
  | WelcomeMessageInterface
  | EmptyTrashMessageInterface
  | ModalityMessageInterface
  | WorkingListMessageInterface
  | MobileDeviceMessageInterface
  | SubscribedUsersMessageInterface
  | ClinicalEventMessageInterface
  | FocusedClinicalEventMessageInterface
  | PrescriptionMessageInterface
  | ConsultationListMessageInterface;
