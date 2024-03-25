import type { RefObject } from "react";
import React, { useEffect } from "react";
import {
  useRemoteCursorOverlayPositions,
  type CursorOverlayData,
} from "@slate-yjs/react";
import {
  getPluginOptions,
  useEditorRef,
  usePlateSelectors,
} from "@udecode/plate-core";
import type { UnknownObject } from "@udecode/utils";
import { flushSync } from "react-dom";

import type { YjsPlugin } from "@udecode/plate-yjs";
import { KEY_YJS } from "@udecode/plate-yjs";

export interface CaretPosition {
  height: number;
  top: number;
  left: number;
}

export interface SelectionRect {
  width: number;
  height: number;

  top: number;
  left: number;
}

export type RenderSelectionRect<
  TCursorData extends UnknownObject = UnknownObject
> = React.FC<Pick<CursorProps<TCursorData>, "data" | "selectionRect">>;
export type RenderCaret<TCursorData extends UnknownObject = UnknownObject> =
  React.FC<Pick<CursorProps<TCursorData>, "data" | "caretPosition">>;

export interface CursorProps<
  TCursorData extends UnknownObject = UnknownObject
> {
  data: TCursorData;
  selectionRect: SelectionRect;
  caretPosition: CaretPosition;
}

export interface CursorOverlayProps<
  TCursorData extends UnknownObject = UnknownObject
> {
  onRenderSelectionRect: RenderSelectionRect<TCursorData>;
  onRenderCaret: RenderCaret<TCursorData>;
  containerRef?: RefObject<HTMLDivElement>;
}

type Renderers<TCursorData extends UnknownObject = UnknownObject> = Pick<
  CursorOverlayProps<TCursorData>,
  "onRenderSelectionRect" | "onRenderCaret"
>;

type RemoteSelectionProps<TCursorData extends UnknownObject = UnknownObject> =
  CursorOverlayData<TCursorData> & Renderers<TCursorData>;

const RemoteSelection = <TCursorData extends UnknownObject = UnknownObject>({
  data,
  selectionRects,
  caretPosition,
  onRenderSelectionRect: RenderSelectionRect,
  onRenderCaret: RenderCaret,
}: RemoteSelectionProps<TCursorData>) => {
  if (!data) {
    return null;
  }

  return (
    <>
      {selectionRects.map((rect, i) => {
        return <RenderSelectionRect key={i} data={data} selectionRect={rect} />;
      })}
      {caretPosition && (
        <RenderCaret data={data} caretPosition={caretPosition} />
      )}
    </>
  );
};

type RemoteCursorOverlayContentProps<
  TCursorData extends UnknownObject = UnknownObject
> = { containerRef?: RefObject<HTMLDivElement> } & Renderers<TCursorData>;

function RemoteCursorOverlayContent<
  TCursorData extends UnknownObject = UnknownObject
>({
  containerRef,
  onRenderSelectionRect,
  onRenderCaret,
}: RemoteCursorOverlayContentProps<TCursorData>) {
  const [cursors] = useRemoteCursorOverlayPositions<TCursorData>({
    containerRef,
  });
  console.log({ cursors });

  return (
    <>
      {cursors.map((cursor) => (
        <RemoteSelection
          key={cursor.clientId}
          {...cursor}
          onRenderSelectionRect={onRenderSelectionRect}
          onRenderCaret={onRenderCaret}
        />
      ))}
    </>
  );
}

export function RemoteCursorOverlay<
  TCursorData extends UnknownObject = UnknownObject
>(props: CursorOverlayProps<TCursorData>) {
  const editor = useEditorRef();
  const isRendered = usePlateSelectors().isMounted();

  const { disableCursors } = getPluginOptions<YjsPlugin>(editor, KEY_YJS);

  // console.log("editor", editor);

  const hidden =
    disableCursors || !editor || editor.children.length === 0 || !isRendered;
  console.log({ disableCursors, isRendered });

  // existing issue with @slate-yjs/react https://github.com/BitPhinix/slate-yjs/issues/372
  useEffect(() => {
    if (editor) {
      const { onChange } = editor;
      editor.onChange = () => {
        setTimeout(() => {
          flushSync(() => {
            onChange();
          });
        });
      };
    }
  }, [editor]);
  console.log({ hidden });

  if (hidden) return null;

  return <RemoteCursorOverlayContent<TCursorData> {...props} />;
}
