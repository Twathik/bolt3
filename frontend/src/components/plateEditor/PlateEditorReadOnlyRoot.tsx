import React, { useEffect, useMemo, useState } from "react";
import { useBoltStore } from "@/stores/boltStore";
import { HocuspocusProvider } from "@hocuspocus/provider";
import ReadOnlyPlateEditor from "./ReadOnlyPlateEditor";

interface PlateEditorProps {
  documentName: string;
}

function PlateEditorReadOnlyRoot({ documentName }: PlateEditorProps) {
  const [synced, setSynced] = useState(false);
  const user = useBoltStore((s) => s.user);
  const provider = useMemo(
    () =>
      new HocuspocusProvider({
        url: process.env.NEXT_PUBLIC_HOCUSPOSCUS_PROVIDER ?? "",
        name: documentName,
        onSynced: () => setSynced(true),
        connect: false,
        token: user?.editorApiKey ?? "test",
      }),
    [documentName, user?.editorApiKey]
  );

  useEffect(() => {
    provider.connect();
    return () => provider.disconnect();
  }, [provider]);

  return synced ? (
    <ReadOnlyPlateEditor documentName={documentName} provider={provider} />
  ) : (
    <div />
  );
}

export default PlateEditorReadOnlyRoot;
