import { WebsocketMessageInterface } from "../messagesInterfaces/WebsocketMessageInterface";
import randomColor from "randomColor";
import { Socket, TopicStore } from "../socketInterface";
import { subscribedUsers } from "../messagesInterfaces/SubscribedUsersMessageInterface";
import { v4 as uuid } from "uuid";
import _ from "lodash";
import { topicRelations } from "./relatedTopics";

const getSubscribedUsers = ({
  ws,
  peers,
}: {
  ws: Socket;
  peers: Set<Socket>;
}) => {
  topicRelations.forEach(({ origin, destination }) => {
    if (ws.destination?.includes(destination)) {
      const subscribedUsers: subscribedUsers[] = [];
      peers.forEach((p) => {
        if (p.destination?.includes(origin)) {
          let include = false;

          ws.subscriptionIds?.forEach((d) => {
            if (p.subscriptionIds?.includes(d)) include = true;
          });
          if (include && p.user)
            subscribedUsers.push({
              id: p.user.userId ?? "",
              fullName: `${p.user.firstName} ${p.user.lastName}`,
              color: randomColor({
                luminosity: "dark",
                alpha: 1,
                format: "hex",
              }),
            });
        }
      });
      const syncMessage: WebsocketMessageInterface = {
        id: uuid(),
        destination: [destination],
        global: false,
        subscriptionIds: ws?.subscriptionIds ?? [],
        type: "subscribedUsers",
        payload: {
          operation: "sync",
          subscribedUsers: _.uniqBy(subscribedUsers, "id"),
        },
      };

      ws.send(JSON.stringify(syncMessage));
    }
  });
};

export default getSubscribedUsers;
