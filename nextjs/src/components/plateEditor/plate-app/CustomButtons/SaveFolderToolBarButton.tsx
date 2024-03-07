/* eslint-disable react/jsx-pascal-case */
import { Icons } from "@/components/icons";
import { ToolbarButton } from "@/components/plate-ui/toolbar";
import { useBoltStore } from "@/stores/boltStore";
import { useHotkeys } from "@mantine/hooks";

export function SaveToolBarButton({
  saveCallback,
}: {
  saveCallback: () => Promise<void>;
}) {
  const disableSaveButton = useBoltStore((s) => s.disableSaveButton);
  useHotkeys([["mod+s", saveCallback]], ["mod+s"], true);
  return (
    <ToolbarButton
      tooltip="sauvegarder (⌘+s)"
      onClick={saveCallback}
      disabled={disableSaveButton}>
      <Icons.save />
    </ToolbarButton>
  );
}
