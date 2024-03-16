import type {
  ComboboxOnSelectItem,
  ComboboxProps,
} from "@udecode/plate-combobox";
import type { TElement } from "@udecode/plate-common";
import {
  getPluginOptions,
  getPreviousNode,
  useEditorRef,
} from "@udecode/plate-common";
import type { MentionPlugin } from "@udecode/plate-mention";
import { getMentionOnSelectItem } from "@udecode/plate-mention";
import { DiagCombobox } from "./diag-combobox";
import { DIAGNOSTIC_MENTION_KEY } from "./diag-plugin-key";
import { useCallback } from "react";
import type { DiagnosticElementInterface } from "../../lib/plate-types";

export function MentionDiagCombobox({
  pluginKey = DIAGNOSTIC_MENTION_KEY,
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
          editor.insertNode<DiagnosticElementInterface & TElement>({
            children: [{ text: "" }],
            type: "diagnostic",
            value: item.text,
            diagnosticId: item.key,
          });

          editor.delete({ at: selectedNode[1] });
          editor.delete({ at: previousNode[1] });
        }
      }
    },
    [pluginKey]
  );

  return (
    <div onMouseDown={(e) => e.preventDefault()}>
      <DiagCombobox
        id={id}
        trigger={trigger!}
        controlled
        onSelectItem={onSelectItem}
        {...props}
      />
    </div>
  );
}
