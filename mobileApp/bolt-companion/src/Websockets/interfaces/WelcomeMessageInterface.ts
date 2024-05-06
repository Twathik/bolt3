import type { RootMessageInterface } from "./MessageTypesInterface";

type WelcomeMessagePayloadOperationType = "welcome";

interface RootWelcomeMessagePayload {
  operation: WelcomeMessagePayloadOperationType;
}

export interface WelcomeToMessagePayload extends RootWelcomeMessagePayload {
  operation: "welcome";
  welcome: string;
}

type WelcomeMessagePayload = WelcomeToMessagePayload;

export interface WelcomeMessageInterface extends RootMessageInterface {
  type: "welcome";
  payload: WelcomeMessagePayload;
}
