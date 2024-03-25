import { WebsocketMessageInterface } from "../../../messagesInterfaces/WebsocketMessageInterface";
import { Socket, TopicRoom, TopicStore } from "../../../socketInterface";
import clearConnectionFromTopicRooms from "../../../utils/ClearConnectionFromTopicRooms";
import ConnectToTopic from "../../../utils/ConnectToTopic";
import getSubscribedUsers from "../../../utils/GetSubscribedUsers";
import _ from "lodash";

interface HandleMessages {
  message: WebsocketMessageInterface;
  ws: Socket;
  peers: Set<Socket>;
}
const handleSubscriptionMessages = ({ message, ws, peers }: HandleMessages) => {
  if (!ws.subscriptionIds) ws.subscriptionIds = [];
  if (!ws.destination) ws.destination = [];

  if (ws.user?.userId !== undefined && message.type === "subscribe") {
    if (
      !_.isEqual(ws.subscriptionIds, message.payload.SubscribeTo) ||
      !_.isEqual(ws.destination, message.destination)
    ) {
      clearConnectionFromTopicRooms({ ws, peers });
      ws.subscriptionIds = message.payload.SubscribeTo;
      ws.destination = message.destination;
      ConnectToTopic({ ws, peers });
      getSubscribedUsers({ peers, ws });
    }
  }
};

export default handleSubscriptionMessages;
