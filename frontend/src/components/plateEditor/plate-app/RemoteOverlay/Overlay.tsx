import type { CursorOverlayData } from "@slate-yjs/react";
import clsx from "clsx";
import type { CSSProperties, PropsWithChildren } from "react";
import React, { useRef } from "react";
import type { CursorData } from "./types";
import { addAlpha } from "./utils";
import { useBoltStore } from "@/stores/boltStore";
import type { CursorState } from "@udecode/plate-cursor";
import { useCursorOverlayPositions } from "@udecode/plate-cursor";
import type { UnknownObject } from "@udecode/utils";

const zIndex = 100;

type CaretProps = Pick<CursorOverlayData<CursorData>, "caretPosition" | "data">;

function Caret({ caretPosition, data }: CaretProps) {
  const caretStyle: CSSProperties = {
    ...caretPosition,
    background: data?.color,
  };

  const labelStyle: CSSProperties = {
    transform: "translateY(-100%)",
    background: data?.color,
    zIndex,
  };

  return (
    <div style={caretStyle} className="w-0.5 absolute">
      <div
        className="absolute text-xs text-white whitespace-nowrap top-0 rounded rounded-bl-none px-1.5 py-0.5"
        style={labelStyle}
      >
        {data?.name}
      </div>
    </div>
  );
}

function RemoteSelection({
  data,
  selectionRects,
  caretPosition,
}: CursorOverlayData<CursorData>) {
  if (!data) {
    return null;
  }

  const selectionStyle: CSSProperties = {
    // Add a opacity to the background color
    backgroundColor: addAlpha(data.color, 0.5),
    zIndex,
  };

  return (
    <React.Fragment>
      {selectionRects.map((position, i) => (
        <div
          style={{ ...selectionStyle, ...position }}
          className="absolute pointer-events-none bg-red-600"
          // eslint-disable-next-line react/no-array-index-key
          key={i}
        />
      ))}
      {caretPosition && <Caret caretPosition={caretPosition} data={data} />}
    </React.Fragment>
  );
}

type RemoteCursorsProps = PropsWithChildren<{
  className?: string;
}>;

export function RemoteCursorOverlay({
  className,
  children,
}: RemoteCursorsProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const cursorStates = useBoltStore((s) => s.cursorStates);

  const cursorsData: Record<string, CursorState<UnknownObject>> = {};
  cursorStates.forEach((c) => {
    cursorsData[`cursor${c.clientId}`] = {
      selection: c.selection,
      data: c.data,
      key: c.clientId,
    };
  });
  const cursors = useCursorOverlayPositions({
    containerRef,
    cursors: cursorsData,
  }).cursors.map((cursor) => {
    return {
      clientId: cursor.key,
      data: cursor.data,
      selectionRects: cursor.selectionRects,
      caretPosition: cursor.caretPosition,
    };
  });

  return (
    <div className={clsx("relative", className)} ref={containerRef}>
      {children}
      {cursors.map((cursor) => (
        // @ts-expect-error
        <RemoteSelection key={cursor.clientId} {...cursor} />
      ))}
    </div>
  );
}
