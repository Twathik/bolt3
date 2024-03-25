import destinationHandler from "./DestinationHandler";
import { WebsocketMessageInterface } from "../messagesInterfaces/WebsocketMessageInterface";
import { Socket } from "../socketInterface";

const messageBroker = ({
  message,
  peer,
}: {
  message: WebsocketMessageInterface;
  peer: Socket;
}) => {
  if (message.destination?.length > 0) {
    const check = destinationHandler({ message, ws: peer });
    // console.log({ message });
    if (!check) return;
  }
  // console.log({ message });
  if (message.subscriptionIds?.length > 0) {
    // console.log("user - with IDS");
    let send = false;
    for (const id of message.subscriptionIds) {
      if (peer.subscriptionIds?.includes(id)) send = true;
    }
    if (send) {
      peer.send(JSON.stringify(message));
    }
  } else {
    // console.log("user - no IDS");
    peer.send(JSON.stringify(message));
  }
};

export default messageBroker;
