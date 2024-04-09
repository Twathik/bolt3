import { Text, View } from "@react-pdf/renderer";
import type { TElement } from "@udecode/plate-common";
import React from "react";
import ContentChecker from "../ContentChecker";
import { InlineStyle } from "../DefaultStyles";
import type { PdfCheckerProps } from "../PdfCheckerInterface";

function PrescriptionTableFormatter({
  content,
  ...otherProps
}: PdfCheckerProps) {
  return (
    <View key={Math.random()} style={{ display: "flex", flexDirection: "row" }}>
      <Text
        style={{
          ...InlineStyle,
          marginLeft: 16,
          marginRight: 4,
        }}
      >
        {(
          (content as TElement).children[0].prescriptionNumber as number
        ).toString()}{" "}
        -
      </Text>

      <View style={{ width: "50%" }}>
        <ContentChecker
          key={Math.random()}
          content={(content as TElement).children[1]}
          {...otherProps}
        />
      </View>
      <View style={{ width: "25%" }}>
        <ContentChecker
          key={Math.random()}
          content={(content as TElement).children[2]}
          {...otherProps}
        />
      </View>
      <View style={{ width: "20%" }}>
        <ContentChecker
          key={Math.random()}
          content={(content as TElement).children[3]}
          {...otherProps}
        />
      </View>
    </View>
  );
}

export default PrescriptionTableFormatter;
