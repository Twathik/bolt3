import type { ReactNode } from "react";
import { formatPDFContainer } from "./switchNodeTypes";
import type { SerializedEditorState, SerializedLexicalNode } from "lexical";

const pdfConverter = (
  nodes: SerializedEditorState<SerializedLexicalNode>
): ReactNode[] => {
  return nodes.root.children.map((node) => {
    return formatPDFContainer(node);
  });
};

export default pdfConverter;
