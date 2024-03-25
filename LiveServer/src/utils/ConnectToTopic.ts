import { WebsocketMessageInterface } from "../messagesInterfaces/WebsocketMessageInterface";
import { Socket } from "../socketInterface";
import { v4 as uuid } from "uuid";
import messageBroker from "./messageBroker";
import { topicRelations } from "./relatedTopics";
import { MessageDestination } from "../messagesInterfaces/MessageTypesInterface";
import randomColor from "randomColor";

const ConnectToTopic = ({ ws, peers }: { ws: Socket; peers: Set<Socket> }) => {
  console.log({ destinationFromClearConnection: ws.destination });
  const message: WebsocketMessageInterface = {
    type: "subscribedUsers",
    destination: ws.destination
      ? [
          ...ws.destination,
          ...topicRelations.reduce((related, check) => {
            if (ws.destination?.includes(check.origin))
              return [...related, check.destination];
            return related;
          }, [] as MessageDestination[]),
        ]
      : [],
    global: true,
    id: uuid(),
    subscriptionIds: ws.subscriptionIds ?? [],
    payload: {
      operation: "subscribe",
      subscribedUser: {
        id: ws.user?.userId ?? "",
        color: randomColor({
          luminosity: "dark",
          alpha: 1,
          format: "hex",
        }),
        fullName: `${ws.user?.firstName} ${ws.user?.lastName}`,
      },
    },
  };
  // console.log({ message });
  peers.forEach((peer) => messageBroker({ peer, message }));
};

export default ConnectToTopic;
