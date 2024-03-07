import { ComboboxOnSelectItem, ComboboxProps } from "@udecode/plate-combobox";
import {
  TElement,
  getPluginOptions,
  getPreviousNode,
  useEditorRef,
} from "@udecode/plate-common";
import { getMentionOnSelectItem, MentionPlugin } from "@udecode/plate-mention";
import { DiagCombobox } from "./diag-combobox";
import { DIAGNOSTIC_MENTION_KEY } from "./diag-plugin-key";
import { useCallback } from "react";
import {
  DiagnosticComboboxInterface,
  DiagnosticElementInterface,
} from "../../plateEditor/lib/plate-types";

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
    []
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
