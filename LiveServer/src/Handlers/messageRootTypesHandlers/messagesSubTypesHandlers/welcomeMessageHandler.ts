import { WebsocketMessageInterface } from "../../../messagesInterfaces/WebsocketMessageInterface";
import { Socket } from "../../../socketInterface";
import { v4 as uuid } from "uuid";

export default function welcomeMessageHandler({ ws }: { ws: Socket }) {
  const welcomeMessage: WebsocketMessageInterface = {
    id: uuid(),
    global: true,
    payload: { operation: "welcome", welcome: "welcome to bolt3 live" },
    type: "welcome",
    subscriptionIds: [],
    destination: [],
  };

  ws.send(JSON.stringify(welcomeMessage));
}
