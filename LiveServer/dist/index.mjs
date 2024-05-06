var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/.pnpm/randomcolor@0.6.2/node_modules/randomcolor/randomColor.js
var require_randomColor = __commonJS({
  "node_modules/.pnpm/randomcolor@0.6.2/node_modules/randomcolor/randomColor.js"(exports, module) {
    "use strict";
    (function(root, factory) {
      if (typeof exports === "object") {
        var randomColor3 = factory();
        if (typeof module === "object" && module && module.exports) {
          exports = module.exports = randomColor3;
        }
        exports.randomColor = randomColor3;
      } else if (typeof define === "function" && define.amd) {
        define([], factory);
      } else {
        root.randomColor = factory();
      }
    })(exports, function() {
      var seed = null;
      var colorDictionary = {};
      loadColorBounds();
      var colorRanges = [];
      var randomColor3 = function(options) {
        options = options || {};
        if (options.seed !== void 0 && options.seed !== null && options.seed === parseInt(options.seed, 10)) {
          seed = options.seed;
        } else if (typeof options.seed === "string") {
          seed = stringToInteger(options.seed);
        } else if (options.seed !== void 0 && options.seed !== null) {
          throw new TypeError("The seed value must be an integer or string");
        } else {
          seed = null;
        }
        var H, S, B;
        if (options.count !== null && options.count !== void 0) {
          var totalColors = options.count, colors = [];
          for (var i = 0; i < options.count; i++) {
            colorRanges.push(false);
          }
          options.count = null;
          while (totalColors > colors.length) {
            var color = randomColor3(options);
            if (seed !== null) {
              options.seed = seed;
            }
            colors.push(color);
          }
          options.count = totalColors;
          return colors;
        }
        H = pickHue(options);
        S = pickSaturation(H, options);
        B = pickBrightness(H, S, options);
        return setFormat([H, S, B], options);
      };
      function pickHue(options) {
        if (colorRanges.length > 0) {
          var hueRange = getRealHueRange(options.hue);
          var hue = randomWithin(hueRange);
          var step = (hueRange[1] - hueRange[0]) / colorRanges.length;
          var j = parseInt((hue - hueRange[0]) / step);
          if (colorRanges[j] === true) {
            j = (j + 2) % colorRanges.length;
          } else {
            colorRanges[j] = true;
          }
          var min = (hueRange[0] + j * step) % 359, max = (hueRange[0] + (j + 1) * step) % 359;
          hueRange = [min, max];
          hue = randomWithin(hueRange);
          if (hue < 0) {
            hue = 360 + hue;
          }
          return hue;
        } else {
          var hueRange = getHueRange(options.hue);
          hue = randomWithin(hueRange);
          if (hue < 0) {
            hue = 360 + hue;
          }
          return hue;
        }
      }
      function pickSaturation(hue, options) {
        if (options.hue === "monochrome") {
          return 0;
        }
        if (options.luminosity === "random") {
          return randomWithin([0, 100]);
        }
        var saturationRange = getSaturationRange(hue);
        var sMin = saturationRange[0], sMax = saturationRange[1];
        switch (options.luminosity) {
          case "bright":
            sMin = 55;
            break;
          case "dark":
            sMin = sMax - 10;
            break;
          case "light":
            sMax = 55;
            break;
        }
        return randomWithin([sMin, sMax]);
      }
      function pickBrightness(H, S, options) {
        var bMin = getMinimumBrightness(H, S), bMax = 100;
        switch (options.luminosity) {
          case "dark":
            bMax = bMin + 20;
            break;
          case "light":
            bMin = (bMax + bMin) / 2;
            break;
          case "random":
            bMin = 0;
            bMax = 100;
            break;
        }
        return randomWithin([bMin, bMax]);
      }
      function setFormat(hsv, options) {
        switch (options.format) {
          case "hsvArray":
            return hsv;
          case "hslArray":
            return HSVtoHSL(hsv);
          case "hsl":
            var hsl = HSVtoHSL(hsv);
            return "hsl(" + hsl[0] + ", " + hsl[1] + "%, " + hsl[2] + "%)";
          case "hsla":
            var hslColor = HSVtoHSL(hsv);
            var alpha = options.alpha || Math.random();
            return "hsla(" + hslColor[0] + ", " + hslColor[1] + "%, " + hslColor[2] + "%, " + alpha + ")";
          case "rgbArray":
            return HSVtoRGB(hsv);
          case "rgb":
            var rgb = HSVtoRGB(hsv);
            return "rgb(" + rgb.join(", ") + ")";
          case "rgba":
            var rgbColor = HSVtoRGB(hsv);
            var alpha = options.alpha || Math.random();
            return "rgba(" + rgbColor.join(", ") + ", " + alpha + ")";
          default:
            return HSVtoHex(hsv);
        }
      }
      function getMinimumBrightness(H, S) {
        var lowerBounds = getColorInfo(H).lowerBounds;
        for (var i = 0; i < lowerBounds.length - 1; i++) {
          var s1 = lowerBounds[i][0], v1 = lowerBounds[i][1];
          var s2 = lowerBounds[i + 1][0], v2 = lowerBounds[i + 1][1];
          if (S >= s1 && S <= s2) {
            var m = (v2 - v1) / (s2 - s1), b = v1 - m * s1;
            return m * S + b;
          }
        }
        return 0;
      }
      function getHueRange(colorInput) {
        if (typeof parseInt(colorInput) === "number") {
          var number = parseInt(colorInput);
          if (number < 360 && number > 0) {
            return [number, number];
          }
        }
        if (typeof colorInput === "string") {
          if (colorDictionary[colorInput]) {
            var color = colorDictionary[colorInput];
            if (color.hueRange) {
              return color.hueRange;
            }
          } else if (colorInput.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)) {
            var hue = HexToHSB(colorInput)[0];
            return [hue, hue];
          }
        }
        return [0, 360];
      }
      function getSaturationRange(hue) {
        return getColorInfo(hue).saturationRange;
      }
      function getColorInfo(hue) {
        if (hue >= 334 && hue <= 360) {
          hue -= 360;
        }
        for (var colorName in colorDictionary) {
          var color = colorDictionary[colorName];
          if (color.hueRange && hue >= color.hueRange[0] && hue <= color.hueRange[1]) {
            return colorDictionary[colorName];
          }
        }
        return "Color not found";
      }
      function randomWithin(range) {
        if (seed === null) {
          var golden_ratio = 0.618033988749895;
          var r = Math.random();
          r += golden_ratio;
          r %= 1;
          return Math.floor(range[0] + r * (range[1] + 1 - range[0]));
        } else {
          var max = range[1] || 1;
          var min = range[0] || 0;
          seed = (seed * 9301 + 49297) % 233280;
          var rnd = seed / 233280;
          return Math.floor(min + rnd * (max - min));
        }
      }
      function HSVtoHex(hsv) {
        var rgb = HSVtoRGB(hsv);
        function componentToHex(c) {
          var hex2 = c.toString(16);
          return hex2.length == 1 ? "0" + hex2 : hex2;
        }
        var hex = "#" + componentToHex(rgb[0]) + componentToHex(rgb[1]) + componentToHex(rgb[2]);
        return hex;
      }
      function defineColor(name, hueRange, lowerBounds) {
        var sMin = lowerBounds[0][0], sMax = lowerBounds[lowerBounds.length - 1][0], bMin = lowerBounds[lowerBounds.length - 1][1], bMax = lowerBounds[0][1];
        colorDictionary[name] = {
          hueRange,
          lowerBounds,
          saturationRange: [sMin, sMax],
          brightnessRange: [bMin, bMax]
        };
      }
      function loadColorBounds() {
        defineColor(
          "monochrome",
          null,
          [[0, 0], [100, 0]]
        );
        defineColor(
          "red",
          [-26, 18],
          [[20, 100], [30, 92], [40, 89], [50, 85], [60, 78], [70, 70], [80, 60], [90, 55], [100, 50]]
        );
        defineColor(
          "orange",
          [18, 46],
          [[20, 100], [30, 93], [40, 88], [50, 86], [60, 85], [70, 70], [100, 70]]
        );
        defineColor(
          "yellow",
          [46, 62],
          [[25, 100], [40, 94], [50, 89], [60, 86], [70, 84], [80, 82], [90, 80], [100, 75]]
        );
        defineColor(
          "green",
          [62, 178],
          [[30, 100], [40, 90], [50, 85], [60, 81], [70, 74], [80, 64], [90, 50], [100, 40]]
        );
        defineColor(
          "blue",
          [178, 257],
          [[20, 100], [30, 86], [40, 80], [50, 74], [60, 60], [70, 52], [80, 44], [90, 39], [100, 35]]
        );
        defineColor(
          "purple",
          [257, 282],
          [[20, 100], [30, 87], [40, 79], [50, 70], [60, 65], [70, 59], [80, 52], [90, 45], [100, 42]]
        );
        defineColor(
          "pink",
          [282, 334],
          [[20, 100], [30, 90], [40, 86], [60, 84], [80, 80], [90, 75], [100, 73]]
        );
      }
      function HSVtoRGB(hsv) {
        var h = hsv[0];
        if (h === 0) {
          h = 1;
        }
        if (h === 360) {
          h = 359;
        }
        h = h / 360;
        var s = hsv[1] / 100, v = hsv[2] / 100;
        var h_i = Math.floor(h * 6), f = h * 6 - h_i, p = v * (1 - s), q = v * (1 - f * s), t = v * (1 - (1 - f) * s), r = 256, g = 256, b = 256;
        switch (h_i) {
          case 0:
            r = v;
            g = t;
            b = p;
            break;
          case 1:
            r = q;
            g = v;
            b = p;
            break;
          case 2:
            r = p;
            g = v;
            b = t;
            break;
          case 3:
            r = p;
            g = q;
            b = v;
            break;
          case 4:
            r = t;
            g = p;
            b = v;
            break;
          case 5:
            r = v;
            g = p;
            b = q;
            break;
        }
        var result = [Math.floor(r * 255), Math.floor(g * 255), Math.floor(b * 255)];
        return result;
      }
      function HexToHSB(hex) {
        hex = hex.replace(/^#/, "");
        hex = hex.length === 3 ? hex.replace(/(.)/g, "$1$1") : hex;
        var red = parseInt(hex.substr(0, 2), 16) / 255, green = parseInt(hex.substr(2, 2), 16) / 255, blue = parseInt(hex.substr(4, 2), 16) / 255;
        var cMax = Math.max(red, green, blue), delta = cMax - Math.min(red, green, blue), saturation = cMax ? delta / cMax : 0;
        switch (cMax) {
          case red:
            return [60 * ((green - blue) / delta % 6) || 0, saturation, cMax];
          case green:
            return [60 * ((blue - red) / delta + 2) || 0, saturation, cMax];
          case blue:
            return [60 * ((red - green) / delta + 4) || 0, saturation, cMax];
        }
      }
      function HSVtoHSL(hsv) {
        var h = hsv[0], s = hsv[1] / 100, v = hsv[2] / 100, k = (2 - s) * v;
        return [
          h,
          Math.round(s * v / (k < 1 ? k : 2 - k) * 1e4) / 100,
          k / 2 * 100
        ];
      }
      function stringToInteger(string) {
        var total = 0;
        for (var i = 0; i !== string.length; i++) {
          if (total >= Number.MAX_SAFE_INTEGER)
            break;
          total += string.charCodeAt(i);
        }
        return total;
      }
      function getRealHueRange(colorHue) {
        if (!isNaN(colorHue)) {
          var number = parseInt(colorHue);
          if (number < 360 && number > 0) {
            return getColorInfo(colorHue).hueRange;
          }
        } else if (typeof colorHue === "string") {
          if (colorDictionary[colorHue]) {
            var color = colorDictionary[colorHue];
            if (color.hueRange) {
              return color.hueRange;
            }
          } else if (colorHue.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)) {
            var hue = HexToHSB(colorHue)[0];
            return getColorInfo(hue).hueRange;
          }
        }
        return [0, 360];
      }
      return randomColor3;
    });
  }
});

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
import { v4 as uuid } from "uuid";
var handleUpgrade = ({
  server,
  wss
}) => {
  server.on("upgrade", async (request, socket, head) => {
    socket.on("error", onSocketError);
    const url = request.url;
    if (url?.includes("authToken")) {
      const unparsed = url.replace("/?authToken=", "");
      const parse = unparsed.split("--");
      const authToken = unparsed.replace("--", "##_##");
      try {
        const headers = new Headers();
        headers.append("Authorization", `Bearer ${authToken}`);
        console.log({ authToken });
        const auth = await fetch("http://api.bolt3.local/auth/user", {
          headers
        });
        if (auth.status === 403) {
          socket.write("HTTP/1.1 401 Unauthorized\r\n\r\n");
          socket.destroy();
          return;
        }
        socket.removeListener("error", onSocketError);
        wss.handleUpgrade(request, socket, head, async function done(ws) {
          const connection = ws;
          connection.user = { ...await auth.json(), userId: parse[1] };
          connection.id = uuid();
          wss.emit("connection", connection, request);
        });
      } catch (error) {
        socket.write("HTTP/1.1 401 Unauthorized\r\n\r\n");
        socket.destroy();
        return;
      }
    } else {
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
          connection.id = uuid();
          wss.emit("connection", connection, request);
        });
      } catch (error) {
        socket.write("HTTP/1.1 401 Unauthorized\r\n\r\n");
        socket.destroy();
        return;
      }
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
  ws.destination?.forEach((d) => {
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
  if (message.destination?.length > 0) {
    const check = destinationHandler({ message, ws: peer });
    if (!check)
      return;
  }
  if (message.subscriptionIds?.length > 0) {
    if (peer.subscriptionIds?.length === 0) {
      return peer.send(JSON.stringify(message));
    }
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

// src/utils/ClearConnectionFromTopicRooms.ts
import { v4 as uuid2 } from "uuid";

// src/utils/relatedTopics.ts
var topicRelations = [
  { origin: "folder", destination: "folder-copy" },
  { origin: "document", destination: "document-copy" }
];

// src/utils/ClearConnectionFromTopicRooms.ts
var clearConnectionFromTopicRooms = ({
  ws,
  peers
}) => {
  const message = {
    type: "subscribedUsers",
    destination: ws.destination ? [
      ...ws.destination,
      ...topicRelations.reduce((related, check) => {
        if (ws.destination?.includes(check.origin))
          return [...related, check.destination];
        return related;
      }, [])
    ] : [],
    global: true,
    id: uuid2(),
    subscriptionIds: ws.subscriptionIds ?? [],
    payload: {
      operation: "leave",
      subscribedUser: {
        id: ws.user?.userId ?? "",
        color: "",
        fullName: ""
      }
    }
  };
  peers.forEach((peer) => messageBroker_default({ peer, message }));
};
var ClearConnectionFromTopicRooms_default = clearConnectionFromTopicRooms;

// src/utils/ConnectToTopic.ts
import { v4 as uuid3 } from "uuid";
var import_randomColor = __toESM(require_randomColor());
var ConnectToTopic = ({ ws, peers }) => {
  const message = {
    type: "subscribedUsers",
    destination: ws.destination ? [
      ...ws.destination,
      ...topicRelations.reduce((related, check) => {
        if (ws.destination?.includes(check.origin))
          return [...related, check.destination];
        return related;
      }, [])
    ] : [],
    global: true,
    id: uuid3(),
    subscriptionIds: ws.subscriptionIds ?? [],
    payload: {
      operation: "subscribe",
      subscribedUser: {
        id: ws.user?.userId ?? "",
        color: (0, import_randomColor.default)({
          luminosity: "dark",
          alpha: 1,
          format: "hex"
        }),
        fullName: `${ws.user?.firstName} ${ws.user?.lastName}`
      }
    }
  };
  peers.forEach((peer) => messageBroker_default({ peer, message }));
};
var ConnectToTopic_default = ConnectToTopic;

// src/utils/GetSubscribedUsers.ts
var import_randomColor2 = __toESM(require_randomColor());
import { v4 as uuid4 } from "uuid";
import _ from "lodash";
var getSubscribedUsers = ({
  ws,
  peers
}) => {
  topicRelations.forEach(({ origin, destination }) => {
    if (ws.destination?.includes(destination)) {
      const subscribedUsers = [];
      peers.forEach((p) => {
        if (p.destination?.includes(origin)) {
          let include = false;
          ws.subscriptionIds?.forEach((d) => {
            if (p.subscriptionIds?.includes(d))
              include = true;
          });
          if (include && p.user)
            subscribedUsers.push({
              id: p.user.userId ?? "",
              fullName: `${p.user.firstName} ${p.user.lastName}`,
              color: (0, import_randomColor2.default)({
                luminosity: "dark",
                alpha: 1,
                format: "hex"
              })
            });
        }
      });
      const syncMessage = {
        id: uuid4(),
        destination: [destination],
        global: false,
        subscriptionIds: ws?.subscriptionIds ?? [],
        type: "subscribedUsers",
        payload: {
          operation: "sync",
          subscribedUsers: _.uniqBy(subscribedUsers, "id")
        }
      };
      ws.send(JSON.stringify(syncMessage));
    }
  });
};
var GetSubscribedUsers_default = getSubscribedUsers;

// src/Handlers/messageRootTypesHandlers/messagesSubTypesHandlers/SubscriptionMessagesHandler.ts
import _2 from "lodash";
var handleSubscriptionMessages = ({ message, ws, peers }) => {
  if (!ws.subscriptionIds)
    ws.subscriptionIds = [];
  if (!ws.destination)
    ws.destination = [];
  if (ws.user?.userId !== void 0 && message.type === "subscribe") {
    if (!_2.isEqual(ws.subscriptionIds, message.payload.SubscribeTo) || !_2.isEqual(ws.destination, message.destination)) {
      ClearConnectionFromTopicRooms_default({ ws, peers });
      ws.subscriptionIds = message.payload.SubscribeTo;
      ws.destination = message.destination;
      ConnectToTopic_default({ ws, peers });
      GetSubscribedUsers_default({ peers, ws });
    }
  }
};
var SubscriptionMessagesHandler_default = handleSubscriptionMessages;

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
        return SubscriptionMessagesHandler_default({
          message: message2,
          ws,
          peers
        });
      }
      if (message2.global) {
        globalMessageHandler({ message: message2, peers });
      } else {
        userMessageHandler({ message: message2, peers, ws });
      }
    }
  });
}

// src/Handlers/messageRootTypesHandlers/messagesSubTypesHandlers/welcomeMessageHandler.ts
import { v4 as uuid5 } from "uuid";
function welcomeMessageHandler({ ws }) {
  const welcomeMessage = {
    id: uuid5(),
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
    ws.on("close", function close() {
      const socket = this;
      ClearConnectionFromTopicRooms_default({ ws: socket, peers });
    });
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
  }, 3e3);
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
    console.log("closed");
    clearInterval(interval);
  });
  server.listen(5555);
}
main();
