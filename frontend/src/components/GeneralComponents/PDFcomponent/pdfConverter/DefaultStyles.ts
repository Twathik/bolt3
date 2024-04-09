import type { Style } from "@react-pdf/types";
import type { ElementStyle } from "./PdfCheckerInterface";

export const InlineStyle: ElementStyle = {
  fontFamily: "Arial",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "baseline",
  fontSize: "12px",
  lineHeight: 1.5,
};

export const RootStyle = ({ paddingLeft }: { paddingLeft: string }): Style => ({
  paddingLeft,
  width: "100vw",
});
