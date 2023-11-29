/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type {
  ElementNode,
  LexicalCommand,
  LexicalNode,
  NodeKey,
} from "lexical";

import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $insertNodeToNearestRoot, mergeRegister } from "@lexical/utils";
import {
  $createParagraphNode,
  $createTextNode,
  $getNodeByKey,
  $getSelection,
  $isParagraphNode,
  COMMAND_PRIORITY_EDITOR,
  TextNode,
  createCommand,
} from "lexical";
import { useEffect } from "react";

import {
  $createPrescriptionLayoutContainerNode,
  $isPrescriptionLayoutContainerNode,
  PrescriptionLayoutContainerNode,
} from "./PrescriptionLayoutContainerNode";
import {
  $createPrescriptionLayoutItemNode,
  $isPrescriptionLayoutItemNode,
  PrescriptionLayoutItemNode,
} from "./PrescriptionLayoutItemNode";
import type { PrescriptionNode } from "../PrescriptionPlugin/PrescriptionNode";
import { useBoltStore } from "@/stores/boltStore";

export const INSERT_PRESCRIPTION_LAYOUT_COMMAND: LexicalCommand<null> =
  createCommand<null>();
export const DELETE_PRESCRIPTION_LAYOUT_COMMAND: LexicalCommand<string> =
  createCommand<string>();

export const UPDATE_PRESCRIPTION_LAYOUT_COMMAND: LexicalCommand<{
  template: string;
  nodeKey: NodeKey;
}> = createCommand<{ template: string; nodeKey: NodeKey }>();

export function PrescriptionLayoutPlugin(): null {
  const [editor] = useLexicalComposerContext();
  const removePrescription = useBoltStore((store) => store.removePrescription);
  useEffect(() => {
    if (
      !editor.hasNodes([
        PrescriptionLayoutContainerNode,
        PrescriptionLayoutItemNode,
      ])
    ) {
      throw new Error(
        "LayoutPlugin: PrescriptionLayoutContainerNode, or PrescriptionLayoutItemNode not registered on editor"
      );
    }

    return mergeRegister(
      editor.registerCommand(
        INSERT_PRESCRIPTION_LAYOUT_COMMAND,
        () => {
          editor.update(() => {
            const selection = $getSelection()?.getNodes();
            let isTextNode = false;
            selection?.forEach((s) => {
              if (s instanceof TextNode) {
                isTextNode = true;
              }
            });

            if (isTextNode) return false;

            const container =
              $createPrescriptionLayoutContainerNode("3fr 1fr 1fr");

            const medic = $createPrescriptionLayoutItemNode().append(
              $createTextNode("@")
            );
            container.append(medic);
            const parJour = $createPrescriptionLayoutItemNode()
              .setFormat("right")
              .append($createTextNode(" */jour"));

            container.append(parJour);
            container.append(
              $createPrescriptionLayoutItemNode()
                .setFormat("right")
                .append($createTextNode("QSP "))
            );

            $insertNodeToNearestRoot(container);
            const previous = container.getPreviousSibling();
            if ($isParagraphNode(previous)) {
              previous.remove();
            }
            medic.selectEnd();
          });

          return true;
        },
        COMMAND_PRIORITY_EDITOR
      ),

      editor.registerCommand(
        DELETE_PRESCRIPTION_LAYOUT_COMMAND,
        (prescriptionId) => {
          editor.update(() => {
            const state = editor.getEditorState();
            state._nodeMap.forEach((node) => {
              if (node.__type === "prescription") {
                const n = node as PrescriptionNode;
                if (n.__drug.prescriptionId === prescriptionId) {
                  const parent = n.getParent().getParent() as LexicalNode;
                  console.log({ parent });
                  if (parent.__type === "prescription-layout-container") {
                    parent.remove();
                  } else {
                    n.remove();
                  }
                  removePrescription(n.__drug.prescriptionId);
                }
              }
            });
          });

          return true;
        },
        COMMAND_PRIORITY_EDITOR
      ),

      editor.registerCommand(
        UPDATE_PRESCRIPTION_LAYOUT_COMMAND,
        ({ template, nodeKey }) => {
          editor.update(() => {
            const container = $getNodeByKey<LexicalNode>(nodeKey);

            if (!$isPrescriptionLayoutContainerNode(container)) {
              return;
            }

            const itemsCount = getItemsCountFromTemplate(template);
            const prevItemsCount = getItemsCountFromTemplate(
              container.getTemplateColumns()
            );

            // Add or remove extra columns if new template does not match existing one
            if (itemsCount > prevItemsCount) {
              for (let i = prevItemsCount; i < itemsCount; i++) {
                container.append(
                  $createPrescriptionLayoutItemNode().append(
                    $createParagraphNode()
                  )
                );
              }
            } else if (itemsCount < prevItemsCount) {
              for (let i = prevItemsCount; i < itemsCount; i++) {
                const layoutItem = container?.getChildAtIndex<LexicalNode>(i);

                if ($isPrescriptionLayoutItemNode(layoutItem)) {
                  for (const child of layoutItem.getChildren<LexicalNode>()) {
                    container.insertAfter(child);
                  }
                }
              }
            }

            container.setTemplateColumns(template);
          });

          return true;
        },
        COMMAND_PRIORITY_EDITOR
      ),
      // Structure enforcing transformers for each node type. In case nesting structure is not
      // "Container > Item" it'll unwrap nodes and convert it back
      // to regular content.
      editor.registerNodeTransform(PrescriptionLayoutItemNode, (node) => {
        const parent = node.getParent<ElementNode>();
        if (!$isPrescriptionLayoutContainerNode(parent)) {
          const children = node.getChildren<LexicalNode>();
          for (const child of children) {
            node.insertBefore(child);
          }
          node.remove();
        }
      }),
      editor.registerNodeTransform(PrescriptionLayoutContainerNode, (node) => {
        const children = node.getChildren<LexicalNode>();
        if (!children.every($isPrescriptionLayoutItemNode)) {
          for (const child of children) {
            node.insertBefore(child);
          }
          node.remove();
        }
      })
    );
  }, [editor, removePrescription]);

  return null;
}

function getItemsCountFromTemplate(template: string): number {
  return template.trim().split(/\s+/).length;
}
