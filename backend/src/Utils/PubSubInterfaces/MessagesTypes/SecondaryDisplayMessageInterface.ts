import type {
  PatientInfoInterface,
  RootMessageInterface,
} from "../MessageTypesInterface";

interface RootSecondaryDisplayMessagePayloadInterface {
  screenType: "mainScreen" | "patientView";
}

interface SecondaryDisplayMainScreenMessagePayload
  extends RootSecondaryDisplayMessagePayloadInterface {
  screenType: "mainScreen";
}

interface SecondaryDisplayPatientViewMessagePayload
  extends RootSecondaryDisplayMessagePayloadInterface {
  screenType: "patientView";
  patient: PatientInfoInterface;
}

export type SecondaryDisplayMessagePayload =
  | SecondaryDisplayMainScreenMessagePayload
  | SecondaryDisplayPatientViewMessagePayload;

export interface SecondaryDisplayMessageInterface extends RootMessageInterface {
  type: "secondaryDisplay";
  payload: SecondaryDisplayMessagePayload;
}
