/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { InitialConfigType } from "@lexical/react/LexicalComposer";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import type { EditorState } from "lexical";
import { isDevPlayground } from "@/components/GeneralComponents/LexicalEditor/appSettings";
import { SharedAutocompleteContext } from "@/components/GeneralComponents/LexicalEditor/context/SharedAutocompleteContext";
import { SharedHistoryContext } from "@/components/GeneralComponents/LexicalEditor/context/SharedHistoryContext";
import PlaygroundNodes from "@/components/GeneralComponents/LexicalEditor/nodes/PlaygroundNodes";
import PasteLogPlugin from "@/components/GeneralComponents/LexicalEditor/plugins/PasteLogPlugin";
import { TableContext } from "@/components/GeneralComponents/LexicalEditor/plugins/TablePlugin";
import PlaygroundEditorTheme from "@/components/GeneralComponents/LexicalEditor/themes/PlaygroundEditorTheme";
import { useCallback } from "react";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import AppEditor from "./AppEditor";
import CustomNodes from "./CustomNodes";

console.warn(
  "If you are profiling the playground app, please ensure you turn off the debug view. You can disable it by pressing on the settings control in the bottom-left of your screen and toggling the debug view setting."
);

export default function AppLexical({
  onErrorCallback,
  children,
  onChangeCallback,
  initialState,
}: {
  onErrorCallback?: (error: Error) => void;
  onChangeCallback?: (editorState: EditorState) => void;
  children?: React.ReactNode | null;
  initialState?: string;
}): JSX.Element {
  const onError = useCallback(
    (error: Error) => {
      if (onErrorCallback) return onErrorCallback(error);
      throw error;
    },
    [onErrorCallback]
  );
  const onChange = useCallback(
    (editorState: EditorState) =>
      onChangeCallback
        ? onChangeCallback(editorState)
        : console.log({ editorState }),
    [onChangeCallback]
  );

  const initialConfig: InitialConfigType = {
    editorState: initialState,
    namespace: "Playground",
    nodes: [...PlaygroundNodes, ...CustomNodes],
    onError,
    theme: PlaygroundEditorTheme,
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <SharedHistoryContext>
        <TableContext>
          <SharedAutocompleteContext>
            <div className=" m-4 mx-20 rounded-lg border-y-2 border-slate-400 px-4 py-5 shadow-xl sm:p-6 relative">
              <AppEditor />
              <OnChangePlugin onChange={onChange} />
              {children}
            </div>
            {isDevPlayground ? <PasteLogPlugin /> : null}
          </SharedAutocompleteContext>
        </TableContext>
      </SharedHistoryContext>
    </LexicalComposer>
  );
}
