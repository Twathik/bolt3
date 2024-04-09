import EventLateralPanel from "@/components/PatientPage/PatientFolder/Body/EventView/EventLateralPanel";
import { FloatingToolbar } from "@/components/plate-ui/floating-toolbar";
import { FloatingToolbarButtons } from "@/components/plate-ui/floating-toolbar-buttons";
import { TooltipProvider } from "@/components/plate-ui/tooltip";
import { CommentsProvider } from "@udecode/plate-comments";
import type { ReactNode } from "react";
import React, { useRef } from "react";
import { DndProvider } from "react-dnd";
import { MentionDiagCombobox } from "../Diag-plugin/mention-diag-combobox";
import { DIAGNOSTIC_MENTION_KEY } from "../Diag-plugin/diag-plugin-key";
import { DrugMentionKey } from "../Medic-plugin/drug-plugin-key";
import { CommentsPopover } from "@/components/plate-ui/comments-popover";
import CurrentSelectionPlugin from "../SelectionPlugin/CurrentSelectionPlugin";
import { Editor as PlateBaseEditor } from "@/components/plate-ui/editor";
import { cn } from "@/lib/utils";
import type { BoltUser } from "@/stores/boltStoreType";
import { commentsUsers } from "../../lib/comments";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Plate, type PlateEditor } from "@udecode/plate-core";
import { MentionDrugCombobox } from "../Medic-plugin/mention-drug-combobox";
import type { Value } from "@udecode/plate-common";
import type { HocuspocusProvider } from "@hocuspocus/provider";
import { RemoteCursorOverlay } from "../RemoteOverlay/Overlay";

const PlateEditor = ({
  user,
  editor,
  children,
  provider,
}: {
  user: BoltUser;
  editor: PlateEditor<Value>;
  children: ReactNode;
  provider: HocuspocusProvider;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <TooltipProvider
      disableHoverableContent
      delayDuration={500}
      skipDelayDuration={0}
    >
      <DndProvider backend={HTML5Backend}>
        <CommentsProvider users={commentsUsers} myUserId={user.userId}>
          <Plate editor={editor} onChange={(v) => console.log({ v })}>
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
                  <CurrentSelectionPlugin provider={provider} />

                  <RemoteCursorOverlay />

                  <PlateBaseEditor
                    className="px-[96px] py-16 min-w-[70vw]"
                    autoFocus={true}
                    focusRing={false}
                    variant="ghost"
                    size="md"
                  />

                  {/* <CursorOverlay containerRef={containerRef} /> */}
                  <div id="editor-bottom" />
                </div>
              </div>
            </div>
          </Plate>
        </CommentsProvider>
      </DndProvider>
    </TooltipProvider>
  );
};

export default PlateEditor;
