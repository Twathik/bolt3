import type { PlateEditor } from "@udecode/plate-common";
import { Plate, createPlateEditor } from "@udecode/plate-common";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Editor as PlateBaseEditor } from "@/components/plate-ui/editor";
import { FloatingToolbar } from "@/components/plate-ui/floating-toolbar";
import { FloatingToolbarButtons } from "@/components/plate-ui/floating-toolbar-buttons";
import { TooltipProvider } from "@/components/plate-ui/tooltip";
import { DIAGNOSTIC_MENTION_KEY } from "./plate-app/Diag-plugin/diag-plugin-key";
import { DrugMentionKey } from "./plate-app/Medic-plugin/drug-plugin-key";
import { MentionDrugCombobox } from "./plate-app/Medic-plugin/mention-drug-combobox";
import { CommentsProvider } from "@udecode/plate-comments";
import { commentsUsers, myUserId } from "./lib/comments";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import { useEffect, useMemo, useRef } from "react";
import { MentionDiagCombobox } from "./plate-app/Diag-plugin/mention-diag-combobox";
import { CommentsPopover } from "../plate-ui/comments-popover";
import { CursorOverlay } from "../plate-ui/cursor-overlay";
import { useBoltStore } from "@/stores/boltStore";
import EventLateralPanel from "../PatientPage/PatientFolder/Body/EventView/EventLateralPanel";
import CurrentSelectionPlugin from "./plate-app/SelectionPlugin/CurrentSelectionPlugin";
import * as Y from "yjs";
import type { HocuspocusProvider } from "@hocuspocus/provider";
import { platePluginWithoutCollaboration } from "./lib/plate-plugins";
import { withTCursors, withTYjs } from "@udecode/plate-yjs";
import randomColor from "randomcolor";

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
  const containerRef = useRef<HTMLDivElement>(null);
  const user = useBoltStore((s) => s.user);

  const editor: PlateEditor = useMemo(() => {
    const sharedType = provider.document.get("content", Y.XmlText) as Y.XmlText;
    const e = withTCursors(
      withTYjs(
        createPlateEditor({
          plugins: platePluginWithoutCollaboration(),
          id: "read-write-editor",
        }),
        sharedType,
        { autoConnect: false }
      ),
      provider.awareness!,
      {
        autoSend: true,
        data: {
          color: randomColor({
            luminosity: "dark",
            alpha: 1,
            format: "hex",
          }),
          name: `${user?.lastName} ${user?.firstName}`,
        },
      }
    );
    return e;
  }, [provider.awareness, provider.document, user?.firstName, user?.lastName]);

  useEffect(() => {
    editor.connect();

    return () => editor.disconnect();
  }, [editor]);

  return user ? (
    <TooltipProvider
      disableHoverableContent
      delayDuration={500}
      skipDelayDuration={0}
    >
      <DndProvider backend={HTML5Backend}>
        <CommentsProvider users={commentsUsers} myUserId={myUserId}>
          <Plate editor={editor}>
            <div
              ref={containerRef}
              className={cn(
                // Block selection
                "[&_.slate-start-area-left]:!w-[64px] [&_.slate-start-area-right]:!w-[64px] [&_.slate-start-area-top]:!h-4"
              )}
            >
              <div className="flex flex-row grid-cols-12">
                <div className="col-span-2 ">
                  <EventLateralPanel />
                </div>
                <div className="col-span-10 max-w-[1336px] rounded-lg border bg-background shadow m-2 max-h-[84vh] overflow-auto">
                  {children}
                  <FloatingToolbar>
                    <FloatingToolbarButtons />
                  </FloatingToolbar>
                  {/* <MentionCombobox items={MENTIONABLES} /> */}
                  <MentionDiagCombobox
                    pluginKey={DIAGNOSTIC_MENTION_KEY}
                    items={[{ key: "#", text: "" }]}
                  />
                  <MentionDrugCombobox
                    pluginKey={DrugMentionKey}
                    items={[{ key: "#", text: "" }]}
                  />
                  <CommentsPopover />
                  <CurrentSelectionPlugin patientId={patientId} />

                  {/* <RemoteCursorOverlay
                    containerRef={containerRef}
                    onRenderCaret={() => {
                      console.log("caret");
                      return <div>Test caret</div>;
                    }}
                    onRenderSelectionRect={() => {
                      console.log("select");
                      return <div>Test selection</div>;
                    }}
                  /> */}

                  <PlateBaseEditor
                    className="px-[96px] py-16 min-w-[70vw]"
                    autoFocus={true}
                    focusRing={false}
                    variant="ghost"
                    size="md"
                  />

                  <CursorOverlay containerRef={containerRef} />
                  <div id="editor-bottom" />
                </div>
              </div>
            </div>
          </Plate>
        </CommentsProvider>
      </DndProvider>
    </TooltipProvider>
  ) : (
    <div>no user</div>
  );
}
