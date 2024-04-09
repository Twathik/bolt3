import { Text } from "@react-pdf/renderer";
import React, { useMemo } from "react";
import { InlineStyle } from "./DefaultStyles";
import type { ElementStyle } from "./PdfCheckerInterface";

function TextPdfRenderer({
  content,
  parentStyle,
}: {
  content: any;
  parentStyle: ElementStyle;
}) {
  const style: ElementStyle = useMemo(() => {
    const localStyle: ElementStyle = {
      lineHeight: 1.5,
      ...parentStyle,
    };
    if (content.bold) localStyle.fontWeight = "black";
    if (content.italic) localStyle.fontStyle = "italic";

    if (content.strikethrough && content.underline) {
      localStyle.textDecoration = "line-through underline";
    } else {
      if (content.underline) localStyle.textDecoration = "underline";
      if (content.strikethrough) localStyle.textDecoration = "line-through";
    }
    if (content.superscript) {
      localStyle.verticalAlign = "super";
      localStyle.fontSize = "8px";
    }
    if (content.subscript) {
      localStyle.verticalAlign = "sub";
      localStyle.fontSize = "8px";
    }
    if (content.color) localStyle.color = content.color;
    if (content.backgroundColor)
      localStyle.backgroundColor = content.backgroundColor;
    return localStyle;
  }, [content, parentStyle]);
  return (
    <Text style={{ ...InlineStyle, ...style }}>
      {content.text ?? ((content.children[0].text ?? "") as string)}
    </Text>
  );
}

export default TextPdfRenderer;
