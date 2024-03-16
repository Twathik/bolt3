import { WebSocketServer } from "ws";
import { WebsocketMessageInterface } from "../messagesInterfaces/WebsocketMessageInterface";
import { Socket } from "../socketInterface";
import pongHandler from "./messageRootTypesHandlers/pongHandler";
import errorHandler from "./messageRootTypesHandlers/errorHandler";
import messageHandler from "./messageRootTypesHandlers/MessageHandler";
import welcomeMessageHandler from "./messageRootTypesHandlers/messagesSubTypesHandlers/welcomeMessageHandler";

export default function handleConnections({
  peers,
  wss,
}: {
  peers: Set<Socket>;
  wss: WebSocketServer;
}) {
  wss.on("connection", function connection(ws: Socket) {
    ws.isAlive = true;
    pongHandler({ ws });
    errorHandler({ ws });
    messageHandler({ ws, peers });
    welcomeMessageHandler({ ws });
  });
}
