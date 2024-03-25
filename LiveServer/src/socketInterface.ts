import { WebSocket } from "ws";
import { PublicUser } from "./wg-generated/client";
import { WebsocketMessageInterface } from "./messagesInterfaces/WebsocketMessageInterface";

export interface Socket extends WebSocket {
  isAlive: boolean;
  id: string;
  user?: PublicUser;
  subscriptionIds?: string[];
  destination?: WebsocketMessageInterface["destination"];
}

export interface TopicRoom {
  topic: string;
  subscriptionId: string;
  subscribedSocketId: string[];
}

export type TopicSocket = { [key: string]: TopicRoom };

export type TopicStore = {
  patientStore: TopicSocket;
};
