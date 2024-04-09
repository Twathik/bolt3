import type { TDescendant, TElement } from "@udecode/plate-common";
import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { InlineStyle } from "../DefaultStyles";
import ContentChecker from "../ContentChecker";
import type {
  ElementStyle,
  ListInformationType,
  PdfCheckerProps,
} from "../PdfCheckerInterface";

function ParagraphFormatter({
  content,
  parentStyle,
  ...otherProps
}: PdfCheckerProps) {
  const localParentStyle: ElementStyle = {};
  if (content.align === "justify") {
    localParentStyle.textAlign = "justify";
  }
  if (content.lineHeight) {
    localParentStyle.lineHeight = content.lineHeight as number;
  }

  const indent = ((content.indent as number) ?? 0) * 20;
  let listInformation: ListInformationType | null = null;
  if (content.listStyleType)
    listInformation = {
      type: content.listStyleType as ListInformationType["type"],
      listStart: (content.listStart as number) ?? 1,
    };

  return (
    <View
      style={{
        flexDirection: "row",
        display: "flex",
        paddingLeft: `${indent}px`,
      }}
    >
      {(content.align === "right" || content.align === "center") && (
        <Text style={{ flexGrow: 1 }} />
      )}
      {listInformation && (
        <Text
          style={{
            ...InlineStyle,
            marginLeft: 16,
            marginRight: 4,
          }}
        >
          {listInformation.type === "disc"
            ? "•"
            : `${listInformation.listStart.toString()}.`}
        </Text>
      )}
      {(content?.children as TDescendant[] | TElement[]).map((child) => (
        <ContentChecker
          key={Math.random()}
          content={child}
          parentStyle={{ ...InlineStyle, ...parentStyle }}
          {...otherProps}
        />
      ))}
      {(content.align === "left" || content.align === "center") && (
        <Text style={{ flexGrow: 1 }} />
      )}
    </View>
  );
}

export default ParagraphFormatter;
