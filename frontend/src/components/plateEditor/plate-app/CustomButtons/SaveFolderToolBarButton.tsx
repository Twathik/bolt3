/* eslint-disable react/jsx-pascal-case */
import { Icons } from "@/components/icons";
import { ToolbarButton } from "@/components/plate-ui/toolbar";
import { useHotkeys } from "@mantine/hooks";
import { useEditorRef, type Value } from "@udecode/plate-common";
import type { Dispatch, SetStateAction } from "react";
import { useCallback, useState } from "react";

export function SaveToolBarButton({
  saveCallback,
}: {
  saveCallback: (
    value: Value,
    setLoading?: Dispatch<SetStateAction<boolean>>
  ) => Promise<void>;
}) {
  const editor = useEditorRef();
  const [loading, setLoading] = useState(false);
  const save = useCallback(async () => {
    await saveCallback(editor.children, setLoading);
  }, [editor.children, saveCallback]);

  useHotkeys([["mod+s", save]], ["mod+s"], true);
  return (
    <ToolbarButton
      tooltip="sauvegarder (⌘+s)"
      onClick={save}
      disabled={loading}>
      <Icons.save />
    </ToolbarButton>
  );
}
