import type { ModalityGetOneModalityResponseData } from "@/components/wg-generated/models";
import type { RootMessageInterface } from "./MessageTypesInterface";

type ModalityMessagePayloadOperationType = "update" | "create" | "delete";

interface RootModalityMessagePayload {
  operation: ModalityMessagePayloadOperationType;
}

interface ModalityUpdateMessagePayload extends RootModalityMessagePayload {
  modality: ModalityGetOneModalityResponseData["mainDb_modality"];
}

type ModalityMessagePayload = ModalityUpdateMessagePayload;

export interface ModalityMessageInterface extends RootMessageInterface {
  type: "modality";
  payload: ModalityMessagePayload;
}
