import type { Value } from "@udecode/plate-common";
import { Plate } from "@udecode/plate-common";
import { Editor } from "@/components/plate-ui/editor";
import { plugins } from "./lib/plate-plugins";
import { cn } from "@/lib/utils";
import { useBoltStore } from "@/stores/boltStore";

interface ReadOnlyPlateEditorProps {
  initialValue: Value;
}

export default function ReadOnlyPlateEditor({
  initialValue,
}: ReadOnlyPlateEditorProps) {
  const user = useBoltStore((s) => s.user);
  return user ? (
    <Plate plugins={plugins({ user })} initialValue={initialValue} readOnly>
      <div
        className={cn(
          // Block selection
          "[&_.slate-start-area-left]:!w-[64px] [&_.slate-start-area-right]:!w-[64px] [&_.slate-start-area-top]:!h-4"
        )}>
        <div className="flex flex-row justify-center item-center">
          <div className="mx-auto">
            <Editor
              className="px-[96px] py-16 min-w-[70vw]"
              autoFocus
              focusRing={false}
              variant="ghost"
              size="md"
            />
          </div>
        </div>
      </div>
    </Plate>
  ) : (
    <div></div>
  );
}
