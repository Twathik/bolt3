import { IncomingMessage, Server, ServerResponse } from "http";
import { Server as WebsocketServer } from "ws";
import { Socket } from "../socketInterface";
import onSocketError from "../utils/onSocketError";

const handleUpgrade = ({
  server,
  wss,
}: {
  server: Server<typeof IncomingMessage, typeof ServerResponse>;
  wss: WebsocketServer;
}) => {
  server.on("upgrade", async (request, socket, head) => {
    socket.on("error", onSocketError);
    const headers = new Headers();
    const cookie = request.headers.cookie;
    headers.append("cookie", cookie ?? "");

    try {
      const auth = await fetch("http://api.bolt3.local/auth/user", {
        headers,
      });
      if (auth.status === 204) {
        socket.write("HTTP/1.1 401 Unauthorized\r\n\r\n");
        socket.destroy();
        return;
      }
      socket.removeListener("error", onSocketError);
      wss.handleUpgrade(request, socket, head, async function done(ws) {
        const connection = ws as Socket;
        connection.user = await auth.json();

        wss.emit("connection", connection, request);
      });
    } catch (error) {
      socket.write("HTTP/1.1 401 Unauthorized\r\n\r\n");
      socket.destroy();
      return;
    }

    // This function is not defined on purpose. Implement it with your own logic.
  });
};

export default handleUpgrade;
