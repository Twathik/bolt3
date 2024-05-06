import { comboboxActions, comboboxSelectors } from "@udecode/plate-combobox";
import type { PlateEditor, Value } from "@udecode/plate-common";
import {
  getBlockAbove,
  getParentNode,
  getPlugin,
  insertNodes,
  insertText,
  isEndPoint,
  moveSelection,
  removeNodes,
  select,
  withoutMergingHistory,
  withoutNormalizing,
} from "@udecode/plate-common";
import { ELEMENT_MENTION, isNodeMentionInput } from "@udecode/plate-mention";
import type { ItemWithMetadata } from "../interfaces/itemWithMetadata";

const getMentionOnSelectItemWithMetadata =
  ({ key = ELEMENT_MENTION } = {}) =>
  <V extends Value>(editor: PlateEditor<V>, item: ItemWithMetadata) => {
    let _a;
    const targetRange = comboboxSelectors.targetRange();
    if (!targetRange) return;
    const {
      type,
      options: { insertSpaceAfterMention, createMentionNode },
      //@ts-expect-error
    } = getPlugin(editor, key);
    const pathAbove = (_a = getBlockAbove(editor)) == null ? void 0 : _a[1];
    const isBlockEnd = () =>
      editor.selection &&
      pathAbove &&
      isEndPoint(editor, editor.selection.anchor, pathAbove);
    withoutNormalizing(editor, () => {
      let _a2;
      const props = {
        ...createMentionNode(item, {
          search: (_a2 = comboboxSelectors.text()) != null ? _a2 : "",
        }),
        metadata: item.metadata,
      };

      select(editor, targetRange);
      withoutMergingHistory(editor, () =>
        removeNodes(editor, {
          match: (node) => isNodeMentionInput(editor, node),
        })
      );
      insertNodes(editor, {
        type,
        children: [{ text: "" }],
        ...props,
      });
      moveSelection(editor, { unit: "offset" });
      if (isBlockEnd() && insertSpaceAfterMention) {
        insertText(editor, " ");
      }
    });
    const parentNode =
      editor.selection && getParentNode(editor, editor.selection);
    if (parentNode) {
      editor.delete({ at: [...parentNode[1], 0] });
    }
    return comboboxActions.reset();
  };

export default getMentionOnSelectItemWithMetadata;
