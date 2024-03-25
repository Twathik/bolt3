import { WebsocketMessageInterface } from "../../messagesInterfaces/WebsocketMessageInterface";
import { Socket, TopicStore } from "../../socketInterface";
import globalMessageHandler from "./messagesSubTypesHandlers/GlobalMessageHandler";
import handleSubscriptionMessages from "./messagesSubTypesHandlers/SubscriptionMessagesHandler";
import userMessageHandler from "./messagesSubTypesHandlers/userMessageHandler";

export default function messageHandler({
  ws,
  peers,
}: {
  ws: Socket;
  peers: Set<Socket>;
}) {
  ws.on("message", async function message(data) {
    //
    if (data) {
      const message = JSON.parse(data.toString()) as WebsocketMessageInterface;

      if (message.type === "subscribe") {
        return handleSubscriptionMessages({
          message,
          ws,
          peers,
        });
      }

      if (message.global) {
        globalMessageHandler({ message, peers });
      } else {
        userMessageHandler({ message, peers, ws });
      }
    }
  });
}
