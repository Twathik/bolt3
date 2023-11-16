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
import { SharedHistoryContext } from "@/components/GeneralComponents/LexicalEditor/context/SharedHistoryContext";
import PlaygroundNodes from "@/components/GeneralComponents/LexicalEditor/nodes/PlaygroundNodes";
import { TableContext } from "@/components/GeneralComponents/LexicalEditor/plugins/TablePlugin";
import PlaygroundEditorTheme from "@/components/GeneralComponents/LexicalEditor/themes/PlaygroundEditorTheme";
import { useCallback } from "react";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import CustomNodes from "./CustomNodes";
import PrescriptionFormContainer from "./PrescriptionForm/PrescriptionFormContainer";
import PrescriptionEditor from "./PrescriptionEditor";
import AddPrescriptionButton from "./PrescriptionForm/AddPrescriptionButton";
import PrescriptionsPlugin from "./PrescriptionPlugin/PrescriptionPlugin";

console.warn(
  "If you are profiling the playground app, please ensure you turn off the debug view. You can disable it by pressing on the settings control in the bottom-left of your screen and toggling the debug view setting."
);

export default function PrescriptionLexical({
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
    namespace: "Prescription",
    nodes: [...PlaygroundNodes, ...CustomNodes],
    onError,
    theme: PlaygroundEditorTheme,
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <SharedHistoryContext>
        <TableContext>
          <div className="grid grid-cols-12">
            <div className="col-span-12">
              <AddPrescriptionButton />
            </div>
            <div className="col-span-5">
              <PrescriptionFormContainer />
            </div>
            <div className=" col-span-7 m-4 rounded-lg border-y-2 border-slate-400 px-4 py-5 shadow-xl sm:p-6 relative">
              <PrescriptionEditor />
              <PrescriptionsPlugin />
              <OnChangePlugin onChange={onChange} />
              {children}
            </div>
          </div>
        </TableContext>
      </SharedHistoryContext>
    </LexicalComposer>
  );
}
