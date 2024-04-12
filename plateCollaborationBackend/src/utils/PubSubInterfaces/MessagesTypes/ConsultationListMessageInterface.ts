import type { RootMessageInterface } from "../MessageTypesInterface";

type PatientSpotlight = {
  label: string;
  consultationDate: string;
  description: string;
  patientId: string;
  consultationList: {
    id: string;
    active: boolean;
    patientId: string;
    consultationDate: string;
    patient: {
      lastName: string;
      firstName: string;
      sexe: "F" | "M";
      ddn: string;
    };
  };
};

type ConsultationListMessagePayloadOperationType = "add" | "remove" | "update";

interface RootConsultationListMessagePayload {
  operation: ConsultationListMessagePayloadOperationType;
}

interface ConsultationListUpdateMessagePayload
  extends RootConsultationListMessagePayload {
  consultationList: PatientSpotlight;
}

type ConsultationListMessagePayload = ConsultationListUpdateMessagePayload;

export interface ConsultationListMessageInterface extends RootMessageInterface {
  type: "consultation-list";
  payload: ConsultationListMessagePayload;
}
