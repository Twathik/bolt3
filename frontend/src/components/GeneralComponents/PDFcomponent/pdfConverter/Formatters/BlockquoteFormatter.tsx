import type { TDescendant, TElement } from "@udecode/plate-common";
import React from "react";
import ContentChecker from "../ContentChecker";
import { View } from "@react-pdf/renderer";
import type { PdfCheckerProps } from "../PdfCheckerInterface";

function BlockquoteFormatter(props: PdfCheckerProps) {
  const { content, ...otherProps } = props;
  return (
    <View
      key={Math.random()}
      style={{
        marginLeft: "10px",
        marginBottom: "10px",
        fontSize: "15px",
        color: "rgb(101, 103, 107)",
        borderLeftColor: "rgb(206, 208, 212)",
        borderLeftWidth: "4px",
        borderLeftStyle: "solid",
        paddingLeft: "16px",
      }}
    >
      {(content?.children as TDescendant[] | TElement[]).map((child) => (
        <ContentChecker key={Math.random()} {...otherProps} content={child} />
      ))}
    </View>
  );
}

export default BlockquoteFormatter;
