import type { PlateEditor, Value } from "@udecode/plate-common";
import { Plate } from "@udecode/plate-common";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Editor as PlateBaseEditor } from "@/components/plate-ui/editor";
import { FloatingToolbar } from "@/components/plate-ui/floating-toolbar";
import { FloatingToolbarButtons } from "@/components/plate-ui/floating-toolbar-buttons";
import { TooltipProvider } from "@/components/plate-ui/tooltip";
import { DIAGNOSTIC_MENTION_KEY } from "./plate-app/Diag-plugin/diag-plugin-key";
import { DrugMentionKey } from "./plate-app/Medic-plugin/drug-plugin-key";
import { MentionDrugCombobox } from "./plate-app/Medic-plugin/mention-drug-combobox";
import { plugins } from "./lib/plate-plugins";
import { CommentsProvider } from "@udecode/plate-comments";
import { commentsUsers, myUserId } from "./lib/comments";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import CurrentSelectionPlugin from "./plate-app/SelectionPlugin/CurrentSelectionPlugin";
import EventLateralPanel from "../PatientPage/PatientFolder/Body/EventView/EventLateralPanel";
import { MentionDiagCombobox } from "./plate-app/Diag-plugin/mention-diag-combobox";
import { CommentsPopover } from "../plate-ui/comments-popover";
import { CursorOverlay } from "../plate-ui/cursor-overlay";
import { useBoltStore } from "@/stores/boltStore";
// Import the core binding

// import { useMutation } from "@/lib/wundergraph";

interface PlateEditorProps {
  initialValue: Value;
  onEditorChange: (value: Value) => Promise<void>;
  children: ReactNode;
}

export default function PlateEditor({
  initialValue,
  onEditorChange,
  children,
}: PlateEditorProps) {
  const containerRef = useRef(null);
  const user = useBoltStore((s) => s.user);

  return user ? (
    <TooltipProvider
      disableHoverableContent
      delayDuration={500}
      skipDelayDuration={0}>
      <DndProvider backend={HTML5Backend}>
        <CommentsProvider users={commentsUsers} myUserId={myUserId}>
          <Plate
            plugins={plugins({ user })}
            initialValue={initialValue}
            onChange={onEditorChange}>
            <div
              ref={containerRef}
              className={cn(
                // Block selection
                "[&_.slate-start-area-left]:!w-[64px] [&_.slate-start-area-right]:!w-[64px] [&_.slate-start-area-top]:!h-4"
              )}>
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
                  <CurrentSelectionPlugin />
                  <CursorOverlay containerRef={containerRef} />
                  <PlateBaseEditor
                    className="px-[96px] py-16 min-w-[70vw]"
                    autoFocus
                    focusRing={false}
                    variant="ghost"
                    size="md"
                  />
                  <div id="editor-bottom" />
                </div>
              </div>
            </div>
          </Plate>
        </CommentsProvider>
      </DndProvider>
    </TooltipProvider>
  ) : (
    <div></div>
  );
}
