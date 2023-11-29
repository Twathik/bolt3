/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { DrugHitInterface } from "@/lib/interfaces/DrugsInterfaces";
import { $applyNodeReplacement, $createTextNode, TextNode } from "lexical";
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
    drug: DrugHitInterface;
  },
  SerializedTextNode
>;

function convertPrescriptionElement(
  domNode: HTMLElement
): DOMConversionOutput | null {
  const textContent = domNode.textContent;

  if (textContent !== null) {
    const node = $createTextNode(textContent);
    return {
      node,
    };
  }

  return null;
}

// const prescriptionStyle = "background-color: rgba(24, 119, 232, 0.2)";

const prescriptionStyle = "";
export class PrescriptionNode extends TextNode {
  __prescriptionName: string;
  __drug: DrugHitInterface;

  static getType(): string {
    return "prescription";
  }

  static clone(node: PrescriptionNode): PrescriptionNode {
    return new PrescriptionNode(
      node.__prescriptionName,
      node.__drug,
      node.__text,
      node.__key
    );
  }
  static importJSON(
    serializedNode: SerializedPrescriptionNode
  ): PrescriptionNode {
    const node = $createPrescriptionNode(
      serializedNode.prescriptionName,
      serializedNode.drug
    );
    node.setTextContent(serializedNode.text);
    node.setFormat(serializedNode.format);
    node.setDetail(serializedNode.detail);
    node.setMode(serializedNode.mode);
    node.setStyle(serializedNode.style);
    return node;
  }

  constructor(
    prescriptionName: string,
    drug: DrugHitInterface,
    text?: string,
    key?: NodeKey
  ) {
    super(text ?? prescriptionName, key);
    this.__prescriptionName = prescriptionName;
    this.__drug = drug;
  }

  exportJSON(): SerializedPrescriptionNode {
    return {
      ...super.exportJSON(),
      prescriptionName: this.__prescriptionName,
      drug: this.__drug,
      type: "prescription",
      version: 1,
    };
  }

  createDOM(config: EditorConfig): HTMLElement {
    const dom = super.createDOM(config);
    dom.style.cssText = prescriptionStyle;
    dom.className = "mention prescription";
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

  /* collapseAtStart(_selection: RangeSelection): boolean {
    const parent = this.getParent().this.getParent().this.getParent();
    console.log({ parent });
    this.replace($createParagraphNode());

    return true;
  } */
}

export function $createPrescriptionNode(
  prescriptionName: string,
  drug: DrugHitInterface
): PrescriptionNode {
  const prescriptionNode = new PrescriptionNode(prescriptionName, drug);
  prescriptionNode.setMode("segmented").toggleDirectionless();
  return $applyNodeReplacement(prescriptionNode);
}

export function $isPrescriptionNode(
  node: LexicalNode | null | undefined
): node is PrescriptionNode {
  return node instanceof PrescriptionNode;
}
