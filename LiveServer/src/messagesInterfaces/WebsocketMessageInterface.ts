import type { EmptyTrashMessageInterface } from "./EmptyTrashMessageInterface";
import type { MobileDeviceMessageInterface } from "./MobileDeviceMessageInterface";
import type { ModalityMessageInterface } from "./ModalityMessageInterface";
import type { PatientMessageInterface } from "./PatientMessageInterface";
import type { SecondaryDisplayMessageInterface } from "./SecondaryDisplayMessageInterface";
import type { SubscribeMessageInterface } from "./SubscribeMessageInterface";
import type { WelcomeMessageInterface } from "./WelcomeMessageInterface";
import type { WorkingListMessageInterface } from "./WorkingListMessageInterface";

export type WebsocketMessageInterface =
  | SecondaryDisplayMessageInterface
  | PatientMessageInterface
  | SubscribeMessageInterface
  | WelcomeMessageInterface
  | EmptyTrashMessageInterface
  | ModalityMessageInterface
  | WorkingListMessageInterface
  | MobileDeviceMessageInterface;
