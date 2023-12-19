import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { useEffect } from "react";
import { DataTableNode } from "./DataTableNode";
import invariant from "../../LexicalEditor/shared/src/invariant";
import { mergeRegister } from "@lexical/utils";
import type { DataTableConfiguration } from "../types";
import type { TextNode } from "lexical";

function CheckCellContentPlugin() {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    if (!editor.hasNodes([DataTableNode])) {
      invariant(
        false,
        "TablePlugin: DataTableNode is not registered on editor"
      );
    }

    return mergeRegister(
      editor.registerUpdateListener(({ editorState }) => {
        let data: DataTableConfiguration["data"];
        let n: DataTableNode;
        editorState.read(() => {
          editorState._nodeMap.forEach((node) => {
            if (node.__type === "dataTable") {
              n = node as DataTableNode;
              data = n.__data;
            }
          });
        });
        editor.update(() => {
          n.getChildren().forEach((c) => {
            if (c.__type !== "text") {
              c.remove();
            } else {
              const textNode = c as TextNode;
              if (data.paramType === "number") {
                textNode.setTextContent(
                  textNode.getTextContent().replace(/[^\d.]/g, "")
                );
              }
            }
          });
        });
      })
    );
  }, [editor]);

  return null;
}

export default CheckCellContentPlugin;
