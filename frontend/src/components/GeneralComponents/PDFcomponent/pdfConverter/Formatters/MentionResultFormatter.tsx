import React from "react";
import { Text } from "@react-pdf/renderer";
import { InlineStyle } from "../DefaultStyles";
import type { PdfCheckerProps } from "../PdfCheckerInterface";

function MentionResultFormatter({ parentStyle, content }: PdfCheckerProps) {
  return (
    <Text style={{ ...InlineStyle, fontWeight: "black", ...parentStyle }}>
      {content.value as string}
    </Text>
  );
}

export default MentionResultFormatter;
