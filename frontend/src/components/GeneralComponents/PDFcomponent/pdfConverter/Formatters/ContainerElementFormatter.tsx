import { View } from "@react-pdf/renderer";
import React from "react";
import ContentChecker from "../ContentChecker";
import type { PdfCheckerProps } from "../PdfCheckerInterface";
import type { TElement } from "@udecode/plate-common";

function ContainerElementFormatter({
  content,
  ...otherProps
}: PdfCheckerProps) {
  const ratio = (content.columnTemplate as string)
    .split("/")
    .map((e) => parseInt(e, 10));
  const width = (100 * ratio[0]) / ratio[1];

  return (
    <View
      style={{
        width: `${width}%`,
      }}
    >
      {(content as TElement).children.map((child) => (
        <ContentChecker key={Math.random()} content={child} {...otherProps} />
      ))}
    </View>
  );
}

export default ContainerElementFormatter;
