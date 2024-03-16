import { WebsocketMessageInterface } from "../../../messagesInterfaces/WebsocketMessageInterface";
import { Socket } from "../../../socketInterface";
import destinationHandler from "./DestinationHandler";

export default function userMessageHandler({
  message,
  peers,
  ws,
}: {
  peers: Set<Socket>;
  message: WebsocketMessageInterface;
  ws: Socket;
}) {
  peers.forEach((p) => {
    if (message.destination.length > 0) {
      const check = destinationHandler({ message, ws: p });

      if (!check) return;
    }
    if (p.user && ws.user) {
      if (p.user.userId === ws.user.userId) {
        if (message.subscriptionIds.length > 0) {
          // console.log("user - with IDS");
          let send = false;
          for (const id of message.subscriptionIds) {
            if (ws.subscriptionIds.includes(id)) send = true;
          }
          if (send) {
            p.send(JSON.stringify(message));
          }
        } else {
          // console.log("user - no IDS");
          p.send(JSON.stringify(message));
        }
      }
    }
  });
}
