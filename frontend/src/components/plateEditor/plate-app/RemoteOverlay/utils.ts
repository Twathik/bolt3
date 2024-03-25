import randomColor from "randomcolor";
import type { CursorData } from "./types";

export function randomCursorData(): CursorData {
  return {
    color: randomColor({
      luminosity: "dark",
      alpha: 1,
      format: "hex",
    }),
    name: `Takdemt wathik`,
  };
}

export function addAlpha(hexColor: string, opacity: number): string {
  const normalized = Math.round(Math.min(Math.max(opacity, 0), 1) * 255);
  return hexColor + normalized.toString(16).toUpperCase();
}
