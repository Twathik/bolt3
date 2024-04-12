import type { ReactNode } from "react";
import React, { useEffect, useMemo, useState } from "react";
import { useBoltStore } from "@/stores/boltStore";
import AppPlateEditor from "./AppPlateEditor";
import { HocuspocusProvider } from "@hocuspocus/provider";
import type { CursorStateType } from "@/stores/boltStoreType";

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
  const user = useBoltStore((s) => s.user);
  const setCursorStates = useBoltStore((s) => s.setCursorStates);
  const [synced, setSynced] = useState(false);
  const socket = useBoltStore((s) => s.socket);
  const provider = useMemo(
    () =>
      new HocuspocusProvider({
        url: process.env.NEXT_PUBLIC_HOCUSPOSCUS_PROVIDER ?? "",
        name: documentName,
        broadcast: true,
        onSynced: () => {
          setSynced(true);
          console.log("hocuspocus synced");
        },
        onDestroy: () => console.log("connection destroyed --"),
        onClose(data) {
          console.log("connexion closed --", data);
        },
        onStatus(data) {
          console.log({ status: data.status });
        },
        connect: false,
        preserveConnection: false,
        token: user?.editorApiKey ?? "test",
        onAwarenessUpdate: ({ states }) => {
          const cursors: CursorStateType[] = [];
          states.forEach((state) => {
            if (state.user)
              cursors.push({ clientId: state.clientId, ...state.user });
          });
          setCursorStates(cursors);
        },
      }),
    [documentName, setCursorStates, user?.editorApiKey]
  );

  useEffect(() => {
    provider.connect();
    return () => provider.disconnect();
  }, [provider, user]);

  return synced && socket ? (
    <AppPlateEditor patientId={patientId} provider={provider}>
      {children}
    </AppPlateEditor>
  ) : (
    <div>Conexion to live server in progress ...</div>
  );
}

export default PlateEditorRoot;
