/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type {
  DOMConversionMap,
  EditorConfig,
  LexicalNode,
  NodeKey,
  SerializedElementNode,
  Spread,
} from "lexical";

import { addClassNamesToElement } from "@lexical/utils";
import { $createParagraphNode, ParagraphNode } from "lexical";

export type SerializedLayoutContainerNode = Spread<
  {
    templateColumns: string;
  },
  SerializedElementNode
>;

export class PrescriptionLayoutContainerNode extends ParagraphNode {
  __templateColumns: string;

  constructor(templateColumns: string, key?: NodeKey) {
    super(key);
    this.__templateColumns =
      templateColumns.length > 0 ? templateColumns : "3fr 1fr 1fr";
  }

  static getType(): string {
    return "prescription-layout-container";
  }

  static clone(
    node: PrescriptionLayoutContainerNode
  ): PrescriptionLayoutContainerNode {
    return new PrescriptionLayoutContainerNode(
      node.__templateColumns,
      node.__key
    );
  }

  createDOM(config: EditorConfig): HTMLElement {
    const dom = document.createElement("div");
    dom.style.gridTemplateColumns = this.__templateColumns;
    if (typeof config.theme.layoutContainer === "string") {
      addClassNamesToElement(dom, config.theme.layoutContainer);
    }
    return dom;
  }

  updateDOM(
    prevNode: PrescriptionLayoutContainerNode,
    dom: HTMLElement
  ): boolean {
    if (prevNode.__templateColumns !== this.__templateColumns) {
      dom.style.gridTemplateColumns = this.__templateColumns;
    }
    return false;
  }
  collapseAtStart(): boolean {
    this.replace($createParagraphNode());

    return true;
  }

  static importDOM(): DOMConversionMap | null {
    return {};
  }

  static importJSON(
    json: SerializedLayoutContainerNode
  ): PrescriptionLayoutContainerNode {
    return $createPrescriptionLayoutContainerNode(json.templateColumns);
  }

  canBeEmpty(): boolean {
    return false;
  }

  exportJSON(): SerializedLayoutContainerNode {
    return {
      ...super.exportJSON(),
      templateColumns: this.__templateColumns,
      type: "prescription-layout-container",
      version: 1,
    };
  }

  getTemplateColumns(): string {
    return this.getLatest().__templateColumns;
  }

  setTemplateColumns(templateColumns: string) {
    this.getWritable().__templateColumns = templateColumns;
  }
}

export function $createPrescriptionLayoutContainerNode(
  templateColumns: string
): PrescriptionLayoutContainerNode {
  return new PrescriptionLayoutContainerNode(templateColumns);
}

export function $isPrescriptionLayoutContainerNode(
  node: LexicalNode | null | undefined
): node is PrescriptionLayoutContainerNode {
  return node instanceof PrescriptionLayoutContainerNode;
}
