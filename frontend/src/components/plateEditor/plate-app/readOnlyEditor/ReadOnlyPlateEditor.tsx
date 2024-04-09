import type { PlateEditor } from "@udecode/plate-common";
import { Plate, createPlateEditor, withTHistory } from "@udecode/plate-common";
import { Editor as PlateBaseEditor } from "@/components/plate-ui/editor";
import { cn } from "@/lib/utils";
import { useEffect, useMemo, useRef } from "react";
import type { HocuspocusProvider } from "@hocuspocus/provider";
import { platePluginWithoutCollaboration } from "../../lib/plate-plugins";
import { withTYjs, withTCursors } from "@udecode/plate-yjs";
import * as Y from "yjs";
import withAppNodeId from "../../lib/AppOverrides/withAppNodeId";

// Import the core binding

// import { useMutation } from "@/lib/wundergraph";

export default function ReadOnlyPlateEditor({
  documentName,
  provider,
}: {
  documentName: string;
  provider: HocuspocusProvider;
}) {
  const containerRef = useRef(null);

  const editor: PlateEditor = useMemo(() => {
    const sharedType = provider.document.get("content", Y.XmlText) as Y.XmlText;
    const e = withAppNodeId(
      withTHistory(
        withTCursors(
          withTYjs(
            createPlateEditor({
              plugins: platePluginWithoutCollaboration(),
              id: "read-only-editor",
            }),
            sharedType,
            { autoConnect: false }
          ),
          provider.awareness!,
          {
            autoSend: true,
          }
        )
      ),
      {
        idKey: "id",
        idCreator: () => Math.random().toString(36).slice(2, 7),
        filterText: true,
        filter: () => true,
      }
    );
    return e;
  }, [provider.awareness, provider.document]);

  useEffect(() => {
    editor.connect();
    return () => editor.disconnect();
  }, [editor]);

  return (
    <div>
      <Plate editor={editor}>
        <div
          ref={containerRef}
          className={cn(
            // Block selection
            "[&_.slate-start-area-left]:!w-[64px] [&_.slate-start-area-right]:!w-[64px] [&_.slate-start-area-top]:!h-4"
          )}
        >
          <div className="flex flex-row grid-cols-12">
            <div className="col-span-10 max-w-[1336px] rounded-lg border bg-background shadow m-2 max-h-[84vh] overflow-auto mx-auto">
              {/* <RemoteCursorOverlay containerRef={containerRef} /> */}
              <PlateBaseEditor
                className="px-[96px] py-16 min-w-[70vw]"
                autoFocus={true}
                focusRing={false}
                variant="ghost"
                size="md"
                readOnly
              />
            </div>
          </div>
        </div>
      </Plate>
    </div>
  );
}
