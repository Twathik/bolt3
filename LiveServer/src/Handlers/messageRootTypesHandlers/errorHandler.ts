import { Socket } from "../../socketInterface";

export default function errorHandler({ ws }: { ws: Socket }) {
  ws.on("error", console.error);
}
