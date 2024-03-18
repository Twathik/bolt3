// src/index.ts
import { createServer } from "http";
import { WebSocketServer } from "ws";

// src/utils/redisServer.ts
import redis from "redis";
var redisUrl = "redis://localhost:6379";
var redisClient = redis.createClient({
  url: redisUrl,
  password: "eYVX7EwVmmxKPCDmwMtyKVge8oLd2t81"
});
var redisServer_default = redisClient;

// src/utils/onSocketError.ts
function onSocketError(err) {
  console.error(err);
}

// src/Handlers/handleUpgrade.ts
var handleUpgrade = ({
  server,
  wss
}) => {
  server.on("upgrade", async (request, socket, head) => {
    socket.on("error", onSocketError);
    const headers = new Headers();
    const cookie = request.headers.cookie;
    headers.append("cookie", cookie ?? "");
    try {
      const auth = await fetch("http://api.bolt3.local/auth/user", {
        headers
      });
      if (auth.status === 204) {
        socket.write("HTTP/1.1 401 Unauthorized\r\n\r\n");
        socket.destroy();
        return;
      }
      socket.removeListener("error", onSocketError);
      wss.handleUpgrade(request, socket, head, async function done(ws) {
        const connection = ws;
        connection.user = await auth.json();
        wss.emit("connection", connection, request);
      });
    } catch (error) {
      socket.write("HTTP/1.1 401 Unauthorized\r\n\r\n");
      socket.destroy();
      return;
    }
  });
};
var handleUpgrade_default = handleUpgrade;

// src/messagesInterfaces/MessageTypesInterface.ts
var notificationTopic = "bolt3notifications";

// src/utils/DestinationHandler.ts
function destinationHandler({
  message,
  ws
}) {
  let send = false;
  ws.destination.forEach((d) => {
    if (message.destination?.includes(d))
      send = true;
  });
  return send;
}

// src/utils/messageBroker.ts
var messageBroker = ({
  message,
  peer
}) => {
  console.log({ message });
  if (message.destination.length > 0) {
    const check = destinationHandler({ message, ws: peer });
    if (!check)
      return;
  }
  if (message.subscriptionIds.length > 0) {
    let send = false;
    for (const id of message.subscriptionIds) {
      if (peer.subscriptionIds?.includes(id))
        send = true;
    }
    if (send) {
      peer.send(JSON.stringify(message));
    }
  } else {
    peer.send(JSON.stringify(message));
  }
};
var messageBroker_default = messageBroker;

// src/Handlers/handleRedisConnection.ts
async function handleRedisConnection({
  subscriber: subscriber2,
  peers
}) {
  await subscriber2.subscribe(notificationTopic, (data) => {
    const message = JSON.parse(data);
    peers.forEach((peer) => {
      messageBroker_default({ message, peer });
    });
  });
}

// src/Handlers/messageRootTypesHandlers/pongHandler.ts
function pongHandler({ ws }) {
  ws.on("pong", function() {
    this.isAlive = true;
  });
}

// src/Handlers/messageRootTypesHandlers/errorHandler.ts
function errorHandler({ ws }) {
  ws.on("error", console.error);
}

// src/Handlers/messageRootTypesHandlers/messagesSubTypesHandlers/GlobalMessageHandler.ts
function globalMessageHandler({
  message,
  peers
}) {
  peers.forEach((peer) => {
    messageBroker_default({ message, peer });
  });
}

// src/Handlers/messageRootTypesHandlers/messagesSubTypesHandlers/handleSubscriptionMessages.ts
var handleSubscriptionMessages = ({ message, ws }) => {
  ws.subscriptionIds = [];
  ws.destination = [];
  if (ws.user?.userId !== void 0 && message.type === "subscribe") {
    ws.subscriptionIds = message.payload.SubscribeTo;
    ws.destination = message.destination;
  }
};
var handleSubscriptionMessages_default = handleSubscriptionMessages;

// src/Handlers/messageRootTypesHandlers/messagesSubTypesHandlers/userMessageHandler.ts
function userMessageHandler({
  message,
  peers,
  ws
}) {
  peers.forEach((peer) => {
    if (peer.user && ws.user) {
      if (peer.user.userId === ws.user.userId) {
        messageBroker_default({ message, peer });
      }
    }
  });
}

// src/Handlers/messageRootTypesHandlers/MessageHandler.ts
function messageHandler({
  ws,
  peers
}) {
  ws.on("message", async function message(data) {
    if (data) {
      const message2 = JSON.parse(data.toString());
      if (message2.type === "subscribe") {
        return handleSubscriptionMessages_default({
          message: message2,
          ws
        });
      }
      if (message2.global) {
        globalMessageHandler({ message: message2, peers, ws });
      } else {
        userMessageHandler({ message: message2, peers, ws });
      }
    }
  });
}

// src/Handlers/messageRootTypesHandlers/messagesSubTypesHandlers/welcomeMessageHandler.ts
function welcomeMessageHandler({ ws }) {
  const welcomeMessage = {
    global: true,
    payload: { operation: "welcome", welcome: "welcome to bolt3 live" },
    type: "welcome",
    subscriptionIds: [],
    destination: []
  };
  ws.send(JSON.stringify(welcomeMessage));
}

// src/Handlers/handleConnection.ts
function handleConnections({
  peers,
  wss
}) {
  wss.on("connection", function connection(ws) {
    ws.isAlive = true;
    pongHandler({ ws });
    errorHandler({ ws });
    messageHandler({ ws, peers });
    welcomeMessageHandler({ ws });
  });
}

// src/Handlers/handleKeepAlive.ts
function handleKeepAlive({ peers }) {
  const interval = setInterval(function ping() {
    peers.forEach(function each(ws) {
      if (ws.isAlive === false) {
        console.log("terminated");
        return ws.terminate();
      }
      ws.isAlive = false;
      ws.ping();
    });
  }, 3e4);
  return interval;
}

// src/index.ts
var subscriber = redisServer_default;
var publisher = subscriber.duplicate();
async function main() {
  const server = createServer({
    keepAlive: true
  });
  const wss = new WebSocketServer({ noServer: true });
  const peers = wss.clients;
  await subscriber.connect();
  await publisher.connect();
  await handleRedisConnection({ subscriber, peers });
  handleUpgrade_default({ server, wss });
  handleConnections({ wss, peers });
  const interval = handleKeepAlive({ peers });
  wss.on("close", function close() {
    console.log("connection closed");
    clearInterval(interval);
  });
  server.listen(5555);
}
main();
