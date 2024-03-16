import type { PlateEditor, Value } from "@udecode/plate-common";
import { Plate, createPlateEditor } from "@udecode/plate-common";
import { Editor as PlateBaseEditor } from "@/components/plate-ui/editor";
import { platePluginWithoutCollaboration } from "./lib/plate-plugins";
import { cn } from "@/lib/utils";
import { useMemo, useRef } from "react";
import ReloadEditor from "./plate-app/ReloadEditor/ReloadEditor";

// Import the core binding

// import { useMutation } from "@/lib/wundergraph";

interface PlateEditorProps {
  initialValue: Value;
}

export default function ReadOnlyPlateEditor({
  initialValue,
}: PlateEditorProps) {
  const containerRef = useRef(null);

  const editor: PlateEditor = useMemo(
    () =>
      createPlateEditor({
        plugins: platePluginWithoutCollaboration(),
        id: "read-only-editor",
      }),
    []
  );

  return (
    <Plate editor={editor} value={initialValue}>
      <div
        ref={containerRef}
        className={cn(
          // Block selection
          "[&_.slate-start-area-left]:!w-[64px] [&_.slate-start-area-right]:!w-[64px] [&_.slate-start-area-top]:!h-4"
        )}>
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
            <ReloadEditor initialValue={initialValue} />
          </div>
        </div>
      </div>
    </Plate>
  );
}
