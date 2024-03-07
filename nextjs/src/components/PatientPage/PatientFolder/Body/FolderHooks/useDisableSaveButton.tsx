import { useBoltStore } from "@/stores/boltStore";
import { useEffect } from "react";

function useDisableSaveButton({ isMutating }: { isMutating: boolean }) {
  const setDisableSaveButton = useBoltStore((s) => s.setDisableSaveButton);
  useEffect(() => {
    setDisableSaveButton(isMutating);
  }, [isMutating, setDisableSaveButton]);
  return null;
}

export default useDisableSaveButton;
