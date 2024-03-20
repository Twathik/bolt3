import { createServer } from "http";
import { WebSocketServer } from "ws";
import { Socket } from "./socketInterface";
import redisClient from "./utils/redisServer";
import handleUpgrade from "./Handlers/handleUpgrade";
import handleRedisConnection from "./Handlers/handleRedisConnection";
import handleConnections from "./Handlers/handleConnection";
import handleKeepAlive from "./Handlers/handleKeepAlive";

const subscriber = redisClient;
const publisher = subscriber.duplicate();

async function main() {
  const server = createServer({
    keepAlive: true,
  });
  const wss = new WebSocketServer({ noServer: true });
  const peers = wss.clients as Set<Socket>;

  await subscriber.connect();
  await publisher.connect();

  await handleRedisConnection({ subscriber, peers });
  handleUpgrade({ server, wss });
  handleConnections({ wss, peers });

  const interval = handleKeepAlive({ peers });

  wss.on("close", function close() {
    console.log("connection closed");
    clearInterval(interval);
  });

  server.listen(5555);
}

main();
