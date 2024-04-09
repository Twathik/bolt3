import React, { useEffect, useMemo } from "react";
import { cn } from "@udecode/cn";
import type { UnknownObject } from "@udecode/plate-common";
import { createZustandStore } from "@udecode/plate-common";
import type {
  CursorData,
  CursorOverlayProps,
  CursorProps,
  CursorState,
} from "@udecode/plate-cursor";
import { CursorOverlay as CursorOverlayPrimitive } from "@udecode/plate-cursor";
import { useBoltStore } from "@/stores/boltStore";

export const cursorStore = createZustandStore("cursor")({
  cursors: {},
});

export function Cursor({
  data,
  selectionRects,
  caretPosition,
  disableCaret,
  disableSelection = false,
  classNames,
}: CursorProps<CursorData & { name: string }>) {
  if (!data) {
    return null;
  }

  console.log({
    data,
    selectionRects,
    caretPosition,
    disableCaret,
    disableSelection,
    classNames,
  });
  const { style, selectionStyle = style, name } = data;

  return (
    <>
      {!disableSelection &&
        selectionRects.map((position, i) => (
          <div
            key={i}
            className={cn(
              "pointer-events-none absolute z-10 opacity-[0.3]",
              classNames?.selectionRect
            )}
            style={{
              ...selectionStyle,
              ...position,
            }}
          >
            {name}
          </div>
        ))}
      {!disableCaret && caretPosition && (
        <div
          className={cn(
            "pointer-events-none absolute z-10 w-0.5",
            classNames?.caret
          )}
          style={{ ...caretPosition, ...style }}
        >
          {name}
        </div>
      )}
    </>
  );
}

export function CursorOverlay({ ...props }: CursorOverlayProps) {
  const cursorStates = useBoltStore((s) => s.cursorStates);

  const cursors: Record<string, CursorState<UnknownObject>> = useMemo(() => {
    console.log({ cursorStates });
    const c: Record<string, CursorState<UnknownObject>> = {};
    cursorStates.forEach((cr, index) => {
      c[`cursor${index}`] = cr;
    });
    return c;
  }, [cursorStates]);
  return (
    <CursorOverlayPrimitive
      {...props}
      cursors={cursors}
      onRenderCursor={Cursor}
    />
  );
}
