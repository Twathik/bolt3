import { Socket } from "../../socketInterface";

export default function pongHandler({ ws }: { ws: Socket }) {
  ws.on("pong", function () {
    //@ts-ignore
    this.isAlive = true;
  });
}
