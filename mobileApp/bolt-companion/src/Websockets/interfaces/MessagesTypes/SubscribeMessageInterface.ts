import type { RootMessageInterface } from "../MessageTypesInterface";

type SubscribeMessagePayloadOperationType = "subscribeTo";

interface RootSubscribeMessagePayload {
  operation: SubscribeMessagePayloadOperationType;
}

export interface SubscribeToMessagePayload extends RootSubscribeMessagePayload {
  operation: "subscribeTo";
  SubscribeTo: string[];
}

type SubscribeMessagePayload = SubscribeToMessagePayload;

export interface SubscribeMessageInterface extends RootMessageInterface {
  type: "subscribe";
  payload: SubscribeMessagePayload;
}
