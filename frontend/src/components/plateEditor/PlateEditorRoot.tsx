import type { ReactNode } from "react";
import React, { useEffect, useMemo, useState } from "react";
import { useBoltStore } from "@/stores/boltStore";
import AppPlateEditor from "./plate";
import { HocuspocusProvider } from "@hocuspocus/provider";

interface PlateEditorProps {
  children: ReactNode;
  documentName: string;
  patientId: string;
}

function PlateEditorRoot({
  documentName,
  patientId,
  children,
}: PlateEditorProps) {
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
    <AppPlateEditor patientId={patientId} provider={provider}>
      {children}
    </AppPlateEditor>
  ) : (
    <div />
  );
}

export default PlateEditorRoot;
