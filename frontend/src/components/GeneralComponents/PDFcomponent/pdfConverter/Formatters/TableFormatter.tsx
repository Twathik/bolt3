import { Text, View } from "@react-pdf/renderer";
import React from "react";
import ContentChecker from "../ContentChecker";
import type { PdfCheckerProps } from "../PdfCheckerInterface";
import type { TElement } from "@udecode/plate-common";

function TableRawFormatter({
  content,
  colSizes,
  rawIndex,
  tableRawLength,
  ...otherProps
}: PdfCheckerProps & {
  colSizes: number[] | undefined;
  rawIndex: number;
  tableRawLength: number;
}) {
  return (
    <View
      key={Math.random()}
      style={{
        width:
          colSizes && colSizes[rawIndex] !== 0
            ? `${(colSizes[rawIndex] * 100) / 1034}%`
            : colSizes
            ? undefined
            : `${100 / tableRawLength}%`,
        maxWidth:
          colSizes && colSizes[rawIndex] !== 0
            ? `${(colSizes[rawIndex] * 100) / 1034}%`
            : colSizes
            ? undefined
            : `${100 / tableRawLength}%`,
        flexGrow: colSizes && colSizes[rawIndex] === 0 ? 1 : undefined,
        borderColor: "#1e293b",
        borderStyle: "solid",
        borderWidth: "1px",
        padding: 5,
      }}
    >
      {(content as TElement).children.map((cellContent: any) => (
        <View key={Math.random()}>
          <Text style={{ display: "flex", flexDirection: "row" }}>
            <ContentChecker content={cellContent} {...otherProps} />
          </Text>
        </View>
      ))}
    </View>
  );
}

function TableFormatter({ content, ...otherProps }: PdfCheckerProps) {
  const colSizes = content?.colSizes as number[] | undefined;

  return (
    <View>
      <Text style={{ flexGrow: 1 }} />
      {(content as TElement).children.map((tr: any) => {
        return (
          <View
            key={Math.random()}
            style={{ display: "flex", flexDirection: "row" }}
          >
            {tr.children.map((td: any, index: number) => {
              return (
                <TableRawFormatter
                  key={Math.random()}
                  {...otherProps}
                  colSizes={colSizes}
                  rawIndex={index}
                  content={td}
                  tableRawLength={(content as TElement).children.length}
                />
              );
            })}
          </View>
        );
      })}
      <Text style={{ flexGrow: 1 }} />
    </View>
  );
}

export default TableFormatter;
