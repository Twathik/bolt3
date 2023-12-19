import type { BaseSerializedNode } from "@lexical/clipboard/clipboard";
import { Image, Text, View } from "@react-pdf/renderer";
import type { ReactNode } from "react";
import { tw } from "./mainPDFtheme";
import { getStyle, globalStyles } from "./TextStyles";
import React from "react";

export type nodeTypes =
  | "text"
  | "heading"
  | "listitem"
  | "list"
  | "quote"
  | "paragraph"
  | "horizontalrule"
  | "root"
  | "image"
  | "tablecell"
  | "tablerow"
  | "tablesheet"
  | "prescription"
  | "prescription-layout-item"
  | "prescription-layout-container"
  | "page-break"
  | "link"
  | "layout-container"
  | "layout-item";

export type containerNodeType =
  | "heading"
  | "listitem"
  | "list"
  | "quote"
  | "paragraph"
  | "horizontalrule"
  | "root"
  | "image"
  | "tablecell"
  | "tablerow"
  | "tablesheet"
  | "prescription-layout-item"
  | "prescription-layout-container"
  | "link"
  | "page-break"
  | "layout-container"
  | "layout-item";

export type HeadingTypes = "h1" | "h2" | "h3";

export type TextNodeTpes = "text" | "prescription";

export type ElementStyle = React.ComponentProps<typeof View>["style"];

const cssInObject = (styles: string) => {
  const split = styles.split(";").filter((e) => e.length > 0);
  if (split.length === 0) return {};

  const css = split
    .map((cur) => cur.split(":"))
    .reduce((acc, val) => {
      let [key, value] = val;
      key = key.trim().replace(/-./g, (css) => css.toUpperCase()[1]);
      acc[key] = value.trim();
      return acc;
    }, {} as { [key: string]: string });

  return css;
};

const checkNodeRootType = (
  node: BaseSerializedNode,
  parentStyle: ElementStyle | undefined = {}
): ReactNode => {
  const type = node.type as nodeTypes;
  if (["text", "prescription"].includes(type)) {
    return formatPDFText({ node, parentStyle });
  }
  return formatPDFContainer(node);
};

const formatPDFText = ({
  node,
  parentStyle = {},
}: {
  node: any;
  parentStyle: ElementStyle | undefined;
}): ReactNode => {
  const n = node as any;

  return (
    <Text
      key={Math.random()}
      style={{
        ...parentStyle,
        ...getStyle(n.format),
        ...cssInObject(n.style),
      }}>
      {node.text}
    </Text>
  );
};

const formatHeading = (
  node: BaseSerializedNode,
  parentStyle: ElementStyle | undefined = {}
): ReactNode => {
  const headingtype = (node as any).tag as HeadingTypes;
  let headingFontSize: string = "";
  switch (headingtype) {
    case "h1":
      headingFontSize = "text-2xl text-slate-950 font-bold";
      break;
    case "h2":
      headingFontSize = "text-xl text-slate-500 font-semibold";
      break;
    case "h3":
      headingFontSize = "text-lg text-slate-900 font-medium";
      break;

    default:
      throw Error("unknown heading type");
  }
  return (
    <View
      key={Math.random()}
      style={{ ...parentStyle, ...tw(headingFontSize) }}>
      {node.children?.map((child) => checkNodeRootType(child))}
    </View>
  );
};

const formatList = (
  node: BaseSerializedNode,
  parentStyle: ElementStyle | undefined = {}
): ReactNode => {
  const n = node as any;
  let i = 1;
  return node.children?.map((child) => (
    <View
      key={Math.random()}
      style={{
        ...parentStyle,
        flexDirection: "row",
        marginBottom: 4,
        ...tw("text-base"),
      }}>
      <Text style={{ marginLeft: 16, marginRight: 4 }}>
        {n.listType === "bullet" ? "•" : `${(i++).toString()}.`}
      </Text>
      {checkNodeRootType(child)}
    </View>
  ));
};

const formatListItems = (
  node: BaseSerializedNode,
  parentStyle: ElementStyle | undefined = {}
): ReactNode => {
  return node.children?.map((child) => (
    <View
      key={Math.random()}
      style={{ ...parentStyle, ...globalStyles.container }}>
      {checkNodeRootType(child)}
    </View>
  ));
};

const formatParagraph = (
  node: BaseSerializedNode,
  parentStyle: ElementStyle | undefined = {}
): ReactNode => {
  const n = node as any;

  return (
    <View
      key={Math.random()}
      style={{
        ...parentStyle,
        ...globalStyles.container,
        flexDirection: "row",
        display: "flex",
        paddingLeft: `${n.indent * 20}px`,
      }}>
      {(n.format === "right" ||
        n.format === "center" ||
        n.format === "end") && <Text style={{ flexGrow: 1 }} />}
      {node.children?.map((child) => checkNodeRootType(child))}
      {(n.format === "left" ||
        n.format === "center" ||
        n.format === "start") && <Text style={{ flexGrow: 1 }} />}
    </View>
  );
};

const formatQuote = (
  node: BaseSerializedNode,
  parentStyle: ElementStyle | undefined = {}
): ReactNode => {
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
      }}>
      {node.children?.map((child) => (
        <View key={Math.random()} style={{ ...parentStyle }}>
          {checkNodeRootType(child)}
        </View>
      ))}
    </View>
  );
};

const formatLink = (
  node: BaseSerializedNode,
  parentStyle: ElementStyle | undefined = {}
): ReactNode => {
  return (
    <View key={Math.random()} style={{ ...parentStyle, ...globalStyles.link }}>
      {node.children?.map((child) => checkNodeRootType(child))}
    </View>
  );
};
const formatImage = (
  node: BaseSerializedNode,
  parentStyle: ElementStyle | undefined = {}
): ReactNode => {
  const n = node as any;
  return (
    <View
      wrap={false}
      key={Math.random()}
      style={{
        ...parentStyle,
        //maxHeight: 220,
        textAlign: "center",
        width: "50%",
      }}>
      <Image
        style={{
          marginHorizontal: "10%",
          width: "100%",
          height: "auto",
          maxWidth: n.maxWidth,
        }}
        src={n.src}
      />
    </View>
  );
};

const formatHorizontalRule = () => (
  <View key={Math.random()}>
    <Text
      style={{
        borderBottomColor: "#111827",
        borderBottomStyle: "solid",
        borderBottomWidth: 2,
        margin: 10,
        width: "100%",
      }}></Text>
  </View>
);
const formatPageBreak = () => <View key={Math.random()} break />;

const formatCell = (jsonCell: string): ReactNode => {
  const nodes = JSON.parse(jsonCell);

  return (
    <Text key={Math.random()} style={{ marginTop: 10 }}>
      {nodes.root.children.map((child: any) => checkNodeRootType(child))}
    </Text>
  );
};

const formatTableRow = (
  row: any,
  position: "first" | "last" | "body"
): ReactNode => {
  return (
    <View key={row.id} style={{ display: "flex", flexDirection: "row" }}>
      {row.cells.map((cell: any) => (
        <View
          key={cell.id}
          style={{
            backgroundColor: cell.type === "header" ? "#f1f5f9" : "#fff",
            // flexBasis: "100%",
            fontWeight: position === "first" ? "black" : undefined,
            borderTopStyle: position === "first" ? "solid" : undefined,
            borderTopColor: position === "first" ? "#1e293b" : undefined,
            borderTopWidth: position === "first" ? 2 : undefined,
            borderBottomStyle: position === "last" ? "solid" : undefined,
            borderBottomColor: position === "last" ? "#1e293b" : undefined,
            borderBottomWidth: position === "last" ? 2 : undefined,
            width: cell?.width ?? 75,
            textAlign: "center",
          }}>
          {formatCell(cell.json)}
        </View>
      ))}
    </View>
  );
};

const formatTable = (
  node: BaseSerializedNode,
  parentStyle: ElementStyle | undefined = {}
): ReactNode => {
  const n = node as any;
  const firstRow = n.rows[0];
  const lastRow = n.rows[n.rows.length - 1];
  const rest = n.rows.filter(
    (row: any) => row.id !== firstRow.id && row.id !== lastRow.id
  );

  return (
    <View
      wrap={false}
      key={Math.random()}
      style={{
        ...parentStyle,
        marginHorizontal: "auto",
      }}>
      {formatTableRow(firstRow, "first")}
      {rest.map((row: any) => formatTableRow(row, "body"))}
      {formatTableRow(lastRow, "last")}
    </View>
  );
};

const formatLayoutContainer = (
  node: BaseSerializedNode,
  parentStyle: ElementStyle | undefined = {}
) => {
  const n = node as any;
  const layout: string[] = n.templateColumns
    .split(" ")
    .map((e: string) => e.replace("fr", ""));

  let i = 0;
  layout.forEach((l) => {
    i += parseInt(l, 10);
  });
  const fraction = 100 / i;
  console.log({ n });

  return (
    <View key={Math.random()} style={{ flexDirection: "row", display: "flex" }}>
      {layout.map((l, i) => {
        const width = `${fraction * parseInt(l, 10)}%`;

        return (
          <View
            style={{
              width,
              ...parentStyle,
            }}
            key={Math.random()}>
            {checkNodeRootType(node.children![i]!)}
          </View>
        );
      })}
    </View>
  );
};

export const formatPDFContainer = (
  node: BaseSerializedNode,
  parentStyle: ElementStyle | undefined = {}
): ReactNode => {
  const type = node.type as containerNodeType;

  switch (type) {
    case "heading":
      return formatHeading(node, parentStyle);
    case "list":
      return formatList(node, parentStyle);
    case "listitem":
      return formatListItems(node, parentStyle);
    case "paragraph":
    case "layout-item":
    case "prescription-layout-item":
      return formatParagraph(node, parentStyle);
    case "quote":
      return formatQuote(node, parentStyle);
    case "link":
      return formatLink(node, parentStyle);
    case "image":
      return formatImage(node, parentStyle);
    case "horizontalrule":
      return formatHorizontalRule();
    case "page-break":
      return formatPageBreak();
    case "tablesheet":
      return formatTable(node, parentStyle);
    case "layout-container":
    case "prescription-layout-container":
      return formatLayoutContainer(node, parentStyle);

    default:
      return (
        <View key={Math.random()}>
          <Text>{node.type}</Text>
        </View>
      );
    //throw Error("Node type not recognized during PDF generation");
  }
};
