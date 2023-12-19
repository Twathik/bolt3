import {
  $createParagraphNode,
  $getNodeByKey,
  $insertNodes,
  COMMAND_PRIORITY_EDITOR,
  createCommand,
} from "lexical";
import type {
  SerializedEditorState,
  SerializedLexicalNode,
  LexicalCommand,
  LexicalEditor,
} from "lexical";
import type { InsertDataTableCommandPayload } from "./types";
import type { Cell, TableNode } from "../LexicalEditor/nodes/TableNode";
import {
  $createDataTableNode,
  $createTableNode,
  createUID,
} from "../LexicalEditor/nodes/TableNode";
import type { DataTableInsertDataSubscriptionResponseData } from "@/components/generated/models";
import { generateDataTableRows, populateDataTableEditor } from "./utils";

export const INSERT_WIDGET_COMMAND: LexicalCommand<InsertDataTableCommandPayload> =
  createCommand("INSERT_WIDGET_COMMAND");

export const insertWidgetCommand = (editor: LexicalEditor) =>
  editor.registerCommand<InsertDataTableCommandPayload>(
    INSERT_WIDGET_COMMAND,
    ({ rows, tableContentType }) => {
      const tableNode = $createTableNode(rows, tableContentType);
      $insertNodes([tableNode, $createParagraphNode()]);
      return true;
    },
    COMMAND_PRIORITY_EDITOR
  );

export const INSERT_DATA_IN_TABLE: LexicalCommand<
  DataTableInsertDataSubscriptionResponseData["mainDb_insertDataSubscription"]
> = createCommand("INSERT_DATA_IN_TABLE");

export const insertDataInEditorCommand = (editor: LexicalEditor) =>
  editor.registerCommand<
    DataTableInsertDataSubscriptionResponseData["mainDb_insertDataSubscription"]
  >(
    INSERT_DATA_IN_TABLE,
    (payload) => {
      console.log({ payload });
      const state = editor.getEditorState();
      let nodeKeys: string[] = [];
      state._nodeMap.forEach((node, key) => {
        const n = node as TableNode;
        if (n.__tableContentType === payload.tableContentType) {
          nodeKeys.push(key);
        }
      });

      if (nodeKeys.length === 0) {
        if (payload.widget.config) {
          const rows = generateDataTableRows({
            configuration: payload.widget.config,
          });

          const tableNode = $createDataTableNode(
            rows,
            payload.tableContentType
          );
          $insertNodes([tableNode, $createParagraphNode()]);
        }
      } else {
        nodeKeys.forEach((k) => {
          const node = $getNodeByKey(k) as TableNode;
          const rows = node.__rows.map((row) => {
            const cells = row.cells.map((cell) => {
              let checkedCell: Cell = cell;
              const json = cell.json;
              const data = JSON.parse(
                json
              ) as SerializedEditorState<SerializedLexicalNode>;

              data.root.children.forEach((child) => {
                if (child.type === "dataTable") {
                  if (
                    (child as any).data.paramName ===
                    payload.paramData.paramName
                  ) {
                    checkedCell = {
                      colSpan: 1,
                      id: createUID(),
                      json: populateDataTableEditor(
                        payload.paramData,
                        payload.value
                      ),
                      type: "normal",
                      width: payload.columnWidth,
                    };
                  }
                }
              });

              return { ...checkedCell };
            });
            return { ...row, cells };
          });
          const tableNode = $createDataTableNode(
            rows,
            payload.tableContentType
          );
          node.replace(tableNode);
        });
      }

      return true;
    },
    COMMAND_PRIORITY_EDITOR
  );

export const dataTablesCommands = (
  editor: LexicalEditor
): Array<() => void> => [
  insertWidgetCommand(editor),
  insertDataInEditorCommand(editor),
];
