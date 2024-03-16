import { WebsocketMessageInterface } from "../../../messagesInterfaces/WebsocketMessageInterface";
import { Socket } from "../../../socketInterface";

export default function destinationHandler({
  message,
  ws,
}: {
  message: WebsocketMessageInterface;
  ws: Socket;
}): boolean {
  let send = false;

  ws.destination.forEach((d) => {
    if (message.destination.includes(d)) send = true;
  });
  return send;
}
