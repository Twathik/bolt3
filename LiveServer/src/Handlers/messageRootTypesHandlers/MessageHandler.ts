import { WebsocketMessageInterface } from "../../messagesInterfaces/WebsocketMessageInterface";
import { Socket } from "../../socketInterface";
import destinationHandler from "./messagesSubTypesHandlers/DestinationHandler";
import globalMessageHandler from "./messagesSubTypesHandlers/GlobalMessageHandler";
import handleSubscriptionMessages from "./messagesSubTypesHandlers/handleSubscriptionMessages";
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
        });
      }

      if (message.global) {
        globalMessageHandler({ message, peers, ws });
      } else {
        userMessageHandler({ message, peers, ws });
      }
    }
  });
}
