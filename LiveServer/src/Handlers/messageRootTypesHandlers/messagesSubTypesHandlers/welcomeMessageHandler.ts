import { WebsocketMessageInterface } from "../../../messagesInterfaces/WebsocketMessageInterface";
import { Socket } from "../../../socketInterface";

export default function welcomeMessageHandler({ ws }: { ws: Socket }) {
  const welcomeMessage: WebsocketMessageInterface = {
    global: true,
    payload: { operation: "welcome", welcome: "welcome to bolt3 live" },
    type: "welcome",
    subscriptionIds: [],
    destination: [],
  };

  ws.send(JSON.stringify(welcomeMessage));
}
