import type {
  ComboboxOnSelectItem,
  ComboboxProps,
} from "@udecode/plate-combobox";
import { getPluginOptions, useEditorRef } from "@udecode/plate-common";
import type { MentionPlugin } from "@udecode/plate-mention";
import { DiagCombobox } from "./diag-combobox";
import { DIAGNOSTIC_MENTION_KEY } from "./diag-plugin-key";
import { useCallback } from "react";
import getMentionOnSelectItemWithMetadata from "@/lib/generalUtils/getMentionOnSelectItemWithMetadata";
import type { ItemWithMetadata } from "@/lib/interfaces/itemWithMetadata";

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
      getMentionOnSelectItemWithMetadata({
        key: pluginKey,
      })(editor, item as ItemWithMetadata);
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
