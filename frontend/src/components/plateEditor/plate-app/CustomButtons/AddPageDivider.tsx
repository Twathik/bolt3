/* eslint-disable react/jsx-pascal-case */
import { Icons } from "@/components/icons";
import { DropdownMenuItem } from "@/components/plate-ui/dropdown-menu";
import { ToolbarButton } from "@/components/plate-ui/toolbar";
import { focusEditor } from "@udecode/plate-common";
import { useEditorRef } from "@udecode/plate-core";
import React, { useCallback } from "react";
import { PAGE_BREAK_KEY } from "../PageBreak/PageBreakKeys";

function AddPageDivider() {
  const editor = useEditorRef();
  const onSelect = useCallback(() => {
    const node = {
      type: PAGE_BREAK_KEY,
      children: [{ text: "" }],
    };
    editor.insertNode(node);
    focusEditor(editor);
  }, [editor]);
  return (
    <DropdownMenuItem onSelect={onSelect}>
      <ToolbarButton tooltip="Inserer une saut de page">
        <Icons.divider />
      </ToolbarButton>
    </DropdownMenuItem>
  );
}

export default AddPageDivider;
