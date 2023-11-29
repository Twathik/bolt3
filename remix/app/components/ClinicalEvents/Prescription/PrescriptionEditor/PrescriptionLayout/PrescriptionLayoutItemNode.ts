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
  RangeSelection,
  SerializedElementNode,
} from "lexical";

import { addClassNamesToElement } from "@lexical/utils";
import { $createParagraphNode, $setSelection, ParagraphNode } from "lexical";

export type SerializedPrescriptionLayoutItemNode = SerializedElementNode;

export class PrescriptionLayoutItemNode extends ParagraphNode {
  static getType(): string {
    return "prescription-layout-item";
  }

  static clone(node: PrescriptionLayoutItemNode): PrescriptionLayoutItemNode {
    return new PrescriptionLayoutItemNode(node.__key);
  }

  createDOM(config: EditorConfig): HTMLElement {
    const dom = document.createElement("div");

    if (typeof config.theme.layoutItem === "string") {
      addClassNamesToElement(dom, config.theme.layoutItem);
    }
    return dom;
  }

  updateDOM(): boolean {
    return false;
  }

  static importDOM(): DOMConversionMap | null {
    return {};
  }

  static importJSON(json: any): PrescriptionLayoutItemNode {
    return $createPrescriptionLayoutItemNode().setFormat(json.format);
  }

  /* isShadowRoot(): boolean {
    return true;
  } */

  exportJSON(): SerializedPrescriptionLayoutItemNode {
    return {
      ...super.exportJSON(),
      type: "prescription-layout-item",
      version: 1,
    };
  }

  collapseAtStart(): boolean {
    const newBloc = $createParagraphNode();
    this.getParent().replace(newBloc);
    $setSelection(newBloc.select());

    return true;
  }
  insertNewAfter(_: RangeSelection, restoreSelection: boolean): ParagraphNode {
    const NewBloc = $createParagraphNode();
    const direction = this.getDirection();
    NewBloc.setDirection(direction);
    const parent = this.getParent();

    parent.insertAfter(NewBloc, restoreSelection);
    return NewBloc;
  }
}

export function $createPrescriptionLayoutItemNode(): PrescriptionLayoutItemNode {
  return new PrescriptionLayoutItemNode();
}

export function $isPrescriptionLayoutItemNode(
  node: LexicalNode | null | undefined
): node is PrescriptionLayoutItemNode {
  return node instanceof PrescriptionLayoutItemNode;
}
