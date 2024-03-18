"use client";
import { useBoltStore } from "@/stores/boltStore";
import { useEffect, useState } from "react";
import useWebSocket from "react-use-websocket";
import RootMessageHandler from "./HandleMessages/RootMessageHandler";
import type { WebsocketMessageInterface } from "./interfaces/WebsocketMessageInterface";

export const WebsocketProvider = () => {
  //Public API that will echo messages sent to it back to the client
  const setSocket = useBoltStore((s) => s.setSocket);
  const [message, setMessage] = useState<WebsocketMessageInterface | null>(
    null
  );
  const [connected, setConnected] = useState(false);
  const {
    getWebSocket,
    lastJsonMessage,
    readyState,
    sendJsonMessage,
    sendMessage,
  } = useWebSocket("ws://live.bolt3.local", {
    onOpen: () => {
      setConnected(true);
      console.log("opened");
    },
    onError: () => {
      setSocket(null);
    },
    onClose: () => {
      setSocket(null);
    },

    onMessage: (event) => {
      const m = JSON.parse(event.data) as WebsocketMessageInterface;
      setMessage(m);

      if (m.type === "welcome") console.log({ m });
    },
    queryParams: { subscriptionIds: "test1,test2,test3" },
    //heartbeat: true,

    //Will attempt to reconnect on all close events, such as server shutting down
    shouldReconnect: (closeEvent) => {
      setSocket(null);
      return true;
    },
  });
  useEffect(() => {
    if (connected)
      setSocket({
        getWebSocket,
        lastJsonMessage,
        readyState,
        sendJsonMessage,
        sendMessage,
      });
  }, [
    connected,
    getWebSocket,
    lastJsonMessage,
    readyState,
    sendJsonMessage,
    sendMessage,
    setSocket,
  ]);

  return message ? <RootMessageHandler message={message} /> : null;
};
