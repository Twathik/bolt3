/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { $applyNodeReplacement, TextNode } from "lexical";
import type {
  Spread,
  DOMConversionMap,
  DOMConversionOutput,
  DOMExportOutput,
  EditorConfig,
  LexicalNode,
  NodeKey,
  SerializedTextNode,
} from "lexical";

export type SerializedDiagnosticNode = Spread<
  {
    diagnosticName: string;
  },
  SerializedTextNode
>;

function convertDiagnosticElement(
  domNode: HTMLElement
): DOMConversionOutput | null {
  const textContent = domNode.textContent;

  if (textContent !== null) {
    const node = $createDiagnosticNode(textContent);
    return {
      node,
    };
  }

  return null;
}

// const diagnosticStyle = "background-color: rgba(24, 119, 232, 0.2)";

const diagnosticStyle = "font-weight: bold;";
export class DiagnosticNode extends TextNode {
  __diagnostic: string;

  static getType(): string {
    return "diagnostic";
  }

  static clone(node: DiagnosticNode): DiagnosticNode {
    return new DiagnosticNode(node.__diagnostic, node.__text, node.__key);
  }
  static importJSON(serializedNode: SerializedDiagnosticNode): DiagnosticNode {
    const node = $createDiagnosticNode(serializedNode.diagnosticName);
    node.setTextContent(serializedNode.text);
    node.setFormat(serializedNode.format);
    node.setDetail(serializedNode.detail);
    node.setMode(serializedNode.mode);
    node.setStyle(serializedNode.style);
    return node;
  }

  constructor(diagnosticName: string, text?: string, key?: NodeKey) {
    super(text ?? diagnosticName, key);
    this.__diagnostic = diagnosticName;
  }

  exportJSON(): SerializedDiagnosticNode {
    return {
      ...super.exportJSON(),
      diagnosticName: this.__diagnostic,
      type: "diagnostic",
      version: 1,
    };
  }

  createDOM(config: EditorConfig): HTMLElement {
    const dom = super.createDOM(config);
    dom.style.cssText = diagnosticStyle;
    dom.className = "mention";
    return dom;
  }

  exportDOM(): DOMExportOutput {
    const element = document.createElement("span");
    element.setAttribute("data-lexical-mention", "true");
    element.textContent = this.__text;
    return { element };
  }

  static importDOM(): DOMConversionMap | null {
    return {
      span: (domNode: HTMLElement) => {
        if (!domNode.hasAttribute("data-lexical-mention")) {
          return null;
        }
        return {
          conversion: convertDiagnosticElement,
          priority: 1,
        };
      },
    };
  }

  isTextEntity(): true {
    return true;
  }

  canInsertTextBefore(): boolean {
    return false;
  }

  canInsertTextAfter(): boolean {
    return false;
  }
}

export function $createDiagnosticNode(diagnosticName: string): DiagnosticNode {
  const diagnosticNode = new DiagnosticNode(diagnosticName);
  diagnosticNode.setMode("segmented").toggleDirectionless();
  return $applyNodeReplacement(diagnosticNode);
}

export function $isDiagnosticNode(
  node: LexicalNode | null | undefined
): node is DiagnosticNode {
  return node instanceof DiagnosticNode;
}
