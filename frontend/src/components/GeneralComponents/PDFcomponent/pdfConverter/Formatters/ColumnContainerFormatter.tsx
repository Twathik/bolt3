import React from "react";
import { View } from "@react-pdf/renderer";
import ContentChecker from "../ContentChecker";
import type { PdfCheckerProps } from "../PdfCheckerInterface";
import type { TElement } from "@udecode/plate-common";

function ColumnContainerFormatter(props: PdfCheckerProps) {
  const { content, ...otherProps } = props;

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        gap: 0.5,
        marginTop: "8px",
        marginBottom: "8px",
        width: "100vw",
      }}
    >
      {(content as TElement).children.map((child) => (
        <ContentChecker key={Math.random()} content={child} {...otherProps} />
      ))}
    </View>
  );
}

export default ColumnContainerFormatter;
