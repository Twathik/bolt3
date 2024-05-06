import type { RootMessageInterface } from "../MessageTypesInterface";
interface prescriptionHit {
  id: string;
  prescriptionId: string;
  drugTemplate: string;
  labo: string;
  DCI: string;
  nomCommercial: string;
  PPA: string;
  TR: string;
  vignetteColor: string;
  classPharmaco: string;
  classTherapeutique: string;
  conditionnement: string;
  liste: string;
  pays: string;
  remboursable: boolean;
  prodLocal: boolean;
  comercialisé: boolean;
  img: string;
  miniatureImageLink: string;
  dosage: string;
  forme: string;
}

type PrescriptionMessagePayloadOperationType = "add" | "remove";

interface RootPrescriptionMessagePayload {
  operation: PrescriptionMessagePayloadOperationType;
}

interface PrescriptionUpdateMessagePayload
  extends RootPrescriptionMessagePayload {
  prescription: prescriptionHit;
}

type PrescriptionMessagePayload = PrescriptionUpdateMessagePayload;

export interface PrescriptionMessageInterface extends RootMessageInterface {
  type: "prescription";
  payload: PrescriptionMessagePayload;
}
