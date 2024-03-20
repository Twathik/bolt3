import type { PlateEditor, Value } from "@udecode/plate-common";
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
import { platePluginsWithCollaboration } from "./lib/plate-plugins-with-collaboration";
import { CommentsProvider } from "@udecode/plate-comments";
import { commentsUsers, myUserId } from "./lib/comments";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import { useCallback, useMemo, useRef } from "react";
import { MentionDiagCombobox } from "./plate-app/Diag-plugin/mention-diag-combobox";
import { CommentsPopover } from "../plate-ui/comments-popover";
import { CursorOverlay } from "../plate-ui/cursor-overlay";
import { useBoltStore } from "@/stores/boltStore";
import EventLateralPanel from "../PatientPage/PatientFolder/Body/EventView/EventLateralPanel";
import CurrentSelectionPlugin from "./plate-app/SelectionPlugin/CurrentSelectionPlugin";
import type { WebsocketMessageInterface } from "../Websockets/interfaces/WebsocketMessageInterface";
import { debounce } from "lodash";

// Import the core binding

// import { useMutation } from "@/lib/wundergraph";

interface PlateEditorProps {
  children: ReactNode;
  documentName: string;
  patientId: string;
}

export default function PlateEditor({
  children,
  documentName,
  patientId,
}: PlateEditorProps) {
  const containerRef = useRef(null);
  const user = useBoltStore((s) => s.user);
  const socket = useBoltStore((s) => s.socket);

  const editor: PlateEditor = useMemo(() => {
    const e = createPlateEditor({
      plugins: platePluginsWithCollaboration({ user, documentName }),
      id: "read-only-editor",
    });
    /* const { normalizeNode } = e;

    e.normalizeNode = (entry) => {
      const [node, path] = entry;

      if (isElement(node) && node.type === "p") {
        // ERROR: null is not a valid value for a url
        console.log({ node, path });
        return;
      }

      normalizeNode(entry);
    }; */
    return e;
  }, [documentName, user]);

  const propagate = useCallback(
    (value: Value) => {
      const message: WebsocketMessageInterface = {
        global: false,
        destination: ["folder", "secondary-display"],
        type: "patient",
        subscriptionIds: [patientId],
        payload: {
          operation: "update-clinicalData",
          content: JSON.stringify(value),
        },
      };
      socket?.sendJsonMessage(message, false);
    },
    [patientId, socket]
  );

  const debouncedFunction = useRef(debounce(propagate, 2000));

  const onChange = useCallback(async (value: Value) => {
    debouncedFunction.current(value);
  }, []);

  return user ? (
    <TooltipProvider
      disableHoverableContent
      delayDuration={500}
      skipDelayDuration={0}
    >
      <DndProvider backend={HTML5Backend}>
        <CommentsProvider users={commentsUsers} myUserId={myUserId}>
          <Plate editor={editor} onChange={onChange}>
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

                  {/* <RemoteCursorOverlay containerRef={containerRef} /> */}
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
