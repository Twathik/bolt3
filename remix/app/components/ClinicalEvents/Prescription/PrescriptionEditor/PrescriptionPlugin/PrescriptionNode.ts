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

export type SerializedPrescriptionNode = Spread<
  {
    prescriptionName: string;
  },
  SerializedTextNode
>;

function convertPrescriptionElement(
  domNode: HTMLElement
): DOMConversionOutput | null {
  const textContent = domNode.textContent;

  if (textContent !== null) {
    const node = $createPrescriptionNode(textContent);
    return {
      node,
    };
  }

  return null;
}

// const prescriptionStyle = "background-color: rgba(24, 119, 232, 0.2)";

const prescriptionStyle = "font-weight: bold;";
export class PrescriptionNode extends TextNode {
  __prescription: string;

  static getType(): string {
    return "prescription";
  }

  static clone(node: PrescriptionNode): PrescriptionNode {
    return new PrescriptionNode(node.__prescription, node.__text, node.__key);
  }
  static importJSON(
    serializedNode: SerializedPrescriptionNode
  ): PrescriptionNode {
    const node = $createPrescriptionNode(serializedNode.prescriptionName);
    node.setTextContent(serializedNode.text);
    node.setFormat(serializedNode.format);
    node.setDetail(serializedNode.detail);
    node.setMode(serializedNode.mode);
    node.setStyle(serializedNode.style);
    return node;
  }

  constructor(prescriptionName: string, text?: string, key?: NodeKey) {
    super(text ?? prescriptionName, key);
    this.__prescription = prescriptionName;
  }

  exportJSON(): SerializedPrescriptionNode {
    return {
      ...super.exportJSON(),
      prescriptionName: this.__prescription,
      type: "prescription",
      version: 1,
    };
  }

  createDOM(config: EditorConfig): HTMLElement {
    const dom = super.createDOM(config);
    dom.style.cssText = prescriptionStyle;
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
          conversion: convertPrescriptionElement,
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

export function $createPrescriptionNode(
  prescriptionName: string
): PrescriptionNode {
  const prescriptionNode = new PrescriptionNode(prescriptionName);
  prescriptionNode.setMode("segmented").toggleDirectionless();
  return $applyNodeReplacement(prescriptionNode);
}

export function $isPrescriptionNode(
  node: LexicalNode | null | undefined
): node is PrescriptionNode {
  return node instanceof PrescriptionNode;
}
