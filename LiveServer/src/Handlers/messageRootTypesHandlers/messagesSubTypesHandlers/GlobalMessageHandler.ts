import { WebsocketMessageInterface } from "../../../messagesInterfaces/WebsocketMessageInterface";
import { Socket } from "../../../socketInterface";
import messageBroker from "../../../utils/messageBroker";

export default function globalMessageHandler({
  message,
  peers,
}: {
  peers: Set<Socket>;
  message: WebsocketMessageInterface;
}) {
  peers.forEach((peer) => {
    messageBroker({ message, peer });
  });
}
