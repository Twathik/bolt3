import type { PlateEditor } from "@udecode/plate-common";
import { createPlateEditor } from "@udecode/plate-common";
import type { ReactNode } from "react";
import { useEffect, useMemo } from "react";
import { useBoltStore } from "@/stores/boltStore";
import * as Y from "yjs";
import type { HocuspocusProvider } from "@hocuspocus/provider";
import { platePluginWithoutCollaboration } from "../../lib/plate-plugins";
import { withTYjs, withTYHistory } from "@udecode/plate-yjs";

import AppEditor from "./PlateEditor";
import withAppNodeId from "../../lib/AppOverrides/withAppNodeId";
import { WithEditorRootAppOverrides } from "../../lib/AppOverrides/EditorRootOverrides";

interface AppPlateEditorProps {
  children: ReactNode;
  patientId: string;
  provider: HocuspocusProvider;
}

export default function AppPlateEditor({
  children,
  patientId,
  provider,
}: AppPlateEditorProps) {
  const user = useBoltStore((s) => s.user);
  const socket = useBoltStore((s) => s.socket);

  const editor: PlateEditor = useMemo(() => {
    const sharedType = provider.document.get("content", Y.XmlText) as Y.XmlText;

    const e = WithEditorRootAppOverrides({
      editor: withAppNodeId(
        withTYHistory(
          withTYjs(
            createPlateEditor({
              plugins: platePluginWithoutCollaboration(),
              id: "read-write-editor",
            }),
            sharedType,
            { autoConnect: false }
          )
        ),

        {
          idKey: "id",
          idCreator: () => Math.random().toString(36).slice(2, 7),
          filterText: true,
          filter: () => true,
        }
      ),
      socket,
      patientId,
    });

    return e;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [provider, user]);

  useEffect(() => {
    editor.connect();
    console.log("editor connected --");

    return () => {
      editor.disconnect();
    };
  }, [editor, provider.status, provider.synced]);

  return user ? (
    <AppEditor editor={editor} user={user} provider={provider}>
      {children}
    </AppEditor>
  ) : (
    <div>no user</div>
  );
}
