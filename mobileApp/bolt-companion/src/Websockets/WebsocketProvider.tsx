"use client";

import { useEffect, useMemo, useState } from "react";
import { useMobileBoltStore } from "../lib/stores/mobileBoltStore";
import { WebsocketMessageInterface } from "./interfaces/WebsocketMessageInterface";
import RootMessageHandler from "./HandleMessages/RootMessageHandler";
import useWebSocket from "react-use-websocket";

export const WebsocketProvider = () => {
  //Public API that will echo messages sent to it back to the client
  const setSocket = useMobileBoltStore((s) => s.setSocket);
  const authToken = useMobileBoltStore((s) => s.authToken);

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
  } = useWebSocket("ws://192.168.50.129:5555/", {
    onOpen: () => {
      setConnected(true);
      console.log("opened");
    },
    onError: (e) => {
      console.log({ e });
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
    queryParams: {
      authToken: authToken.replace("Bearer ", "").replace("##_##", "--"),
    },
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

  const response = useMemo(
    () => (message ? <RootMessageHandler message={message} /> : null),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [message?.id]
  );

  return response;
};
