import React, { useEffect } from "react";
import { ComboboxProps } from "@udecode/plate-combobox";
import {
  deleteFragment,
  getNode,
  getPluginOptions,
  getPreviousNode,
  setSelection,
  useEditorRef,
} from "@udecode/plate-common";
import {
  ELEMENT_MENTION,
  getMentionOnSelectItem,
  MentionPlugin,
} from "@udecode/plate-mention";

import { Combobox } from "./combobox";

export function MentionCombobox({
  pluginKey = ELEMENT_MENTION,
  id = pluginKey,
  ...props
}: Partial<ComboboxProps> & {
  pluginKey?: string;
}) {
  const editor = useEditorRef();

  const { trigger } = getPluginOptions<MentionPlugin>(editor, pluginKey);
  const onSelectItem = getMentionOnSelectItem({
    key: pluginKey,
  });

  return (
    <div onMouseDown={(e) => e.preventDefault()}>
      <Combobox
        id={id}
        trigger={trigger!}
        controlled
        onSelectItem={(editor, item) => {
          const selectedNode =
            editor.selection &&
            getPreviousNode(editor, {
              at: editor.selection.focus,
            });
          if (selectedNode) editor.delete({ at: selectedNode[1] });

          onSelectItem(editor, item);
        }}
        {...props}
      />
    </div>
  );
}
