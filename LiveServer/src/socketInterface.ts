import { WebSocket } from "ws";
import { PublicUser } from "./wg-generated/client";
import { WebsocketMessageInterface } from "./messagesInterfaces/WebsocketMessageInterface";

export interface Socket extends WebSocket {
  isAlive: boolean;
  user?: PublicUser;
  subscriptionIds: string[];
  destination: WebsocketMessageInterface["destination"];
}
