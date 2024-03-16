import { RedisClientType } from "redis";
import { WebsocketMessageInterface } from "../../../messagesInterfaces/WebsocketMessageInterface";
import { Socket } from "../../../socketInterface";

interface HandleMessages {
  message: WebsocketMessageInterface;
  ws: Socket;
}
const handleSubscriptionMessages = ({ message, ws }: HandleMessages) => {
  if (ws.user?.userId !== undefined && message.type === "subscribe") {
    ws.subscriptionIds = message.payload.SubscribeTo;
    ws.destination = message.destination;
  }
};

export default handleSubscriptionMessages;
