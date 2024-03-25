import type {
  ComboboxOnSelectItem,
  ComboboxProps,
} from "@udecode/plate-combobox";
import {
  getPluginOptions,
  getPreviousNode,
  useEditorRef,
} from "@udecode/plate-common";
import type { MentionPlugin } from "@udecode/plate-mention";
import { getMentionOnSelectItem } from "@udecode/plate-mention";
import { DrugCombobox } from "./drug-combobox";
import { DrugMentionKey } from "./drug-plugin-key";
import { useCallback } from "react";

export function MentionDrugCombobox({
  pluginKey = DrugMentionKey,
  id = pluginKey,
  ...props
}: Partial<ComboboxProps> & {
  pluginKey?: string;
}) {
  const editor = useEditorRef();

  const { trigger } = getPluginOptions<MentionPlugin>(editor, pluginKey);
  const onSelectItem: ComboboxOnSelectItem<undefined> = useCallback(
    (editor, item) => {
      getMentionOnSelectItem({
        key: pluginKey,
      })(editor, item);
      console.log({});

      const selectedNode =
        editor.selection &&
        getPreviousNode(editor, {
          at: editor.selection.focus,
        });
      if (selectedNode) {
        const previousNode = getPreviousNode(editor, {
          at: selectedNode[1],
        });
        if (previousNode) {
          const deleteNode = getPreviousNode(editor, {
            at: previousNode[1],
          });
          if (deleteNode) editor.delete({ at: deleteNode[1] });
        }
      }
    },
    [pluginKey]
  );

  return (
    <div onMouseDown={(e) => e.preventDefault()}>
      <DrugCombobox
        id={id}
        trigger={trigger!}
        controlled
        onSelectItem={onSelectItem}
        {...props}
      />
    </div>
  );
}
