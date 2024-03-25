import { WebSocketServer } from "ws";
import { WebsocketMessageInterface } from "../messagesInterfaces/WebsocketMessageInterface";
import { Socket, TopicRoom, TopicStore } from "../socketInterface";
import pongHandler from "./messageRootTypesHandlers/pongHandler";
import errorHandler from "./messageRootTypesHandlers/errorHandler";
import messageHandler from "./messageRootTypesHandlers/MessageHandler";
import welcomeMessageHandler from "./messageRootTypesHandlers/messagesSubTypesHandlers/welcomeMessageHandler";
import clearConnectionFromTopicRooms from "../utils/ClearConnectionFromTopicRooms";

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
    ws.on("close", function close(this) {
      const socket = this as Socket;
      clearConnectionFromTopicRooms({ ws: socket, peers });
      // console.log({ destination: ws.destination });
    });
  });
}
