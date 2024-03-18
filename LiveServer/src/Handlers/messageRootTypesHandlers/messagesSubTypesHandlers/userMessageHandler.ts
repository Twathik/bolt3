import { WebsocketMessageInterface } from "../../../messagesInterfaces/WebsocketMessageInterface";
import { Socket } from "../../../socketInterface";
import messageBroker from "../../../utils/messageBroker";

export default function userMessageHandler({
  message,
  peers,
  ws,
}: {
  peers: Set<Socket>;
  message: WebsocketMessageInterface;
  ws: Socket;
}) {
  peers.forEach((peer) => {
    if (peer.user && ws.user) {
      if (peer.user.userId === ws.user.userId) {
        messageBroker({ message, peer });
      }
    }
  });
}
