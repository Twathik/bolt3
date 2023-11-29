/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { SharedHistoryContext } from "../LexicalEditor/context/SharedHistoryContext";
import { TableContext } from "../LexicalEditor/plugins/TablePlugin";
import { SharedAutocompleteContext } from "../LexicalEditor/context/SharedAutocompleteContext";
import AppEditor from "./AppEditor";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import PlaygroundEditorTheme from "@/components/GeneralComponents/LexicalEditor/themes/PlaygroundEditorTheme";
import type { ComponentProps } from "react";
import { useCallback } from "react";
import CustomNodes from "./CustomNodes";
import type { EditorState } from "lexical";
import CommonNodes from "./CommonNodes";

console.warn(
  "If you are profiling the playground app, please ensure you turn off the debug view. You can disable it by pressing on the settings control in the bottom-left of your screen and toggling the debug view setting."
);

function AppLexical({
  onErrorCallback,
  children,
  onChangeCallback,
  initialState,
}: {
  onErrorCallback?: (error: Error) => void;
  onChangeCallback?: (editorState: EditorState) => void;
  children?: React.ReactNode | null;
  initialState?: string | undefined;
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

  const initialConfig: ComponentProps<typeof LexicalComposer>["initialConfig"] =
    {
      editorState: initialState,
      namespace: "Playground",
      nodes: [...CommonNodes, ...CustomNodes],
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
          </SharedAutocompleteContext>
        </TableContext>
      </SharedHistoryContext>
    </LexicalComposer>
  );
}

export default AppLexical;
