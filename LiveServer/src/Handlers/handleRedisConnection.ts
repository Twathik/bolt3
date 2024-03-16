import { RedisClientType } from "redis";
import { WebsocketMessageInterface } from "../messagesInterfaces/WebsocketMessageInterface";
import { Socket } from "../socketInterface";
import { notificationTopic } from "../messagesInterfaces/MessageTypesInterface";

export default async function handleRedisConnection({
  subscriber,
  peers,
}: {
  subscriber: RedisClientType;
  peers: Set<Socket>;
}) {
  await subscriber.subscribe(notificationTopic, (data) => {
    const message = JSON.parse(data) as WebsocketMessageInterface;
    // console.dir({ message }, { depth: 5 });

    peers.forEach((p) => {
      if (message.subscriptionIds.length > 0) {
        // console.log("global - with IDS");
        let send = false;
        for (const id of message.subscriptionIds) {
          if (message.subscriptionIds.includes(id)) send = true;
        }
        if (send) {
          p.send(data.toString());
        }
      } else {
        // console.log("global - no IDS");
        p.send(data.toString());
      }
    });
  });
}
