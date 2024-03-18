import { RedisClientType } from "redis";
import { WebsocketMessageInterface } from "../messagesInterfaces/WebsocketMessageInterface";
import { Socket } from "../socketInterface";
import { notificationTopic } from "../messagesInterfaces/MessageTypesInterface";
import messageBroker from "../utils/messageBroker";

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

    peers.forEach((peer) => {
      messageBroker({ message, peer });
    });
  });
}
