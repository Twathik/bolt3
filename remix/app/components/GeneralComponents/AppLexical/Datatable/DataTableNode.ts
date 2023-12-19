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

import { ParagraphNode } from "lexical";
import type { DataTable } from "../types";

export type SerializedDataTableNode = Spread<
  {
    data: DataTable;
  },
  SerializedElementNode
>;

export class DataTableNode extends ParagraphNode {
  __data: DataTable;

  constructor(data: DataTable, key?: NodeKey) {
    super(key);
    this.__data = data;
  }

  static getType(): string {
    return "dataTable";
  }

  static clone(node: DataTableNode): DataTableNode {
    return new DataTableNode(node.__data, node.__key);
  }

  createDOM(config: EditorConfig): HTMLElement {
    const dom = document.createElement("div");

    return dom;
  }

  updateDOM(_prevNode: DataTableNode, _dom: HTMLElement): boolean {
    return false;
  }
  collapseAtStart(): boolean {
    // this.replace($createParagraphNode());
    return false;
  }
  isShadowRoot(): boolean {
    return true;
  }

  static importDOM(): DOMConversionMap | null {
    return {};
  }

  static importJSON(json: SerializedDataTableNode): DataTableNode {
    return $createDataTableNode(json.data);
  }

  canBeEmpty(): boolean {
    return false;
  }

  exportJSON(): SerializedDataTableNode {
    return {
      ...super.exportJSON(),
      data: this.__data,
      type: "dataTable",
      version: 1,
    };
  }

  getData(): DataTable {
    return this.getLatest().__data;
  }

  setData(data: DataTable) {
    this.getWritable().__data = data;
  }
}

export function $createDataTableNode(data: DataTable): DataTableNode {
  return new DataTableNode(data);
}

export function $isDataTableNode(
  node: LexicalNode | null | undefined
): node is DataTableNode {
  return node instanceof DataTableNode;
}
