import { Socket } from "../socketInterface";

export default function handleKeepAlive({ peers }: { peers: Set<Socket> }) {
  const interval = setInterval(function ping() {
    peers.forEach(function each(ws) {
      if (ws.isAlive === false) {
        console.log("terminated");
        return ws.terminate();
      }

      ws.isAlive = false;
      ws.ping();
    });
  }, 3000);
  return interval;
}
