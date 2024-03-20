import type { ModalityModalitiesResponseData } from "@/components/wg-generated/models";
import type { RootMessageInterface } from "./MessageTypesInterface";

type ModalityMessagePayloadOperationType = "update" | "create" | "delete";

interface RootModalityMessagePayload {
  operation: ModalityMessagePayloadOperationType;
}

interface ModalityUpdateMessagePayload extends RootModalityMessagePayload {
  modality: ModalityModalitiesResponseData["mainDb_modalities"][0];
}

type ModalityMessagePayload = ModalityUpdateMessagePayload;

export interface ModalityMessageInterface extends RootMessageInterface {
  type: "modality";
  payload: ModalityMessagePayload;
}
