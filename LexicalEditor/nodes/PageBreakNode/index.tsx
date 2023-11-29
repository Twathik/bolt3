/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import "./index.css";

import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { useLexicalNodeSelection } from "@lexical/react/useLexicalNodeSelection";
import { mergeRegister } from "@lexical/utils";
import type {
  DOMConversionMap,
  DOMConversionOutput,
  LexicalNode,
  NodeKey,
  SerializedLexicalNode,
} from "lexical";
import * as lexical from "lexical";

import * as React from "react";
import { useCallback, useEffect } from "react";

export type SerializedPageBreakNode = SerializedLexicalNode;

function PageBreakComponent({ nodeKey }: { nodeKey: NodeKey }) {
  const [editor] = useLexicalComposerContext();
  const [isSelected, setSelected, clearSelection] =
    useLexicalNodeSelection(nodeKey);

  const onDelete = useCallback(
    (event: KeyboardEvent) => {
      event.preventDefault();
      if (isSelected && lexical.$isNodeSelection(lexical.$getSelection())) {
        const node = lexical.$getNodeByKey(nodeKey);
        if ($isPageBreakNode(node)) {
          node.remove();
          return true;
        }
      }
      return false;
    },
    [isSelected, nodeKey]
  );

  useEffect(() => {
    return mergeRegister(
      editor.registerCommand(
        lexical.CLICK_COMMAND,
        (event: MouseEvent) => {
          const pbElem = editor.getElementByKey(nodeKey);

          if (event.target === pbElem) {
            if (!event.shiftKey) {
              clearSelection();
            }
            setSelected(!isSelected);
            return true;
          }

          return false;
        },
        lexical.COMMAND_PRIORITY_LOW
      ),
      editor.registerCommand(
        lexical.KEY_DELETE_COMMAND,
        onDelete,
        lexical.COMMAND_PRIORITY_LOW
      ),
      editor.registerCommand(
        lexical.KEY_BACKSPACE_COMMAND,
        onDelete,
        lexical.COMMAND_PRIORITY_LOW
      )
    );
  }, [clearSelection, editor, isSelected, nodeKey, onDelete, setSelected]);

  useEffect(() => {
    const pbElem = editor.getElementByKey(nodeKey);
    if (pbElem !== null) {
      pbElem.className = isSelected ? "selected" : "";
    }
  }, [editor, isSelected, nodeKey]);

  return null;
}

export class PageBreakNode extends lexical.DecoratorNode<JSX.Element> {
  static getType(): string {
    return "page-break";
  }

  static clone(node: PageBreakNode): PageBreakNode {
    return new PageBreakNode(node.__key);
  }

  static importJSON(serializedNode: SerializedPageBreakNode): PageBreakNode {
    return $createPageBreakNode();
  }

  static importDOM(): DOMConversionMap | null {
    return {
      figure: (domNode: HTMLElement) => {
        const tp = domNode.getAttribute("type");
        if (tp !== this.getType()) return null;

        return {
          conversion: convertPageBreakElement,
          priority: lexical.COMMAND_PRIORITY_HIGH,
        };
      },
    };
  }

  exportJSON(): SerializedLexicalNode {
    return {
      type: this.getType(),
      version: 1,
    };
  }

  createDOM(): HTMLElement {
    const el = document.createElement("figure");
    el.style.pageBreakAfter = "always";
    el.setAttribute("type", this.getType());
    return el;
  }

  getTextContent(): string {
    return "\n";
  }

  isInline(): false {
    return false;
  }

  updateDOM(): boolean {
    return false;
  }

  decorate(): JSX.Element {
    return <PageBreakComponent nodeKey={this.__key} />;
  }
}

function convertPageBreakElement(): DOMConversionOutput {
  return { node: $createPageBreakNode() };
}

export function $createPageBreakNode(): PageBreakNode {
  return new PageBreakNode();
}

export function $isPageBreakNode(
  node: LexicalNode | null | undefined
): node is PageBreakNode {
  return node instanceof PageBreakNode;
}
