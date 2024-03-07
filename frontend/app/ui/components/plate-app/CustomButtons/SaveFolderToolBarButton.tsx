/* eslint-disable react/jsx-pascal-case */
import { Icons } from "@/components/icons";
import { ToolbarButton } from "../../plate-ui/toolbar";
import { useHotkeys } from "@mantine/hooks";
import { useBoltStore } from "@/stores/boltStore";

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
