/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

export type SettingName =
  | "disableBeforeInput"
  | "measureTypingPerf"
  | "isRichText"
  | "isCollab"
  | "isCharLimit"
  | "isMaxLength"
  | "isCharLimitUtf8"
  | "isAutocomplete"
  | "shouldUseLexicalContextMenu"
  | "showTreeView"
  | "showNestedEditorTreeView"
  | "emptyEditor"
  | "showTableOfContents"
  | "tableCellMerge"
  | "tableCellBackgroundColor";

export type Settings = Record<SettingName, boolean>;

export const isDevPlayground: boolean = false;

export const DEFAULT_SETTINGS: Settings = {
  disableBeforeInput: false,
  emptyEditor: false,
  isAutocomplete: false,
  isCharLimit: false,
  isCharLimitUtf8: false,
  isCollab: false,
  isMaxLength: false,
  isRichText: true,
  measureTypingPerf: false,
  shouldUseLexicalContextMenu: true,
  showNestedEditorTreeView: false,
  showTableOfContents: false,
  showTreeView: false,
  tableCellBackgroundColor: true,
  tableCellMerge: true,
};
