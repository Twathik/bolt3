/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { LexicalComposer } from "@lexical/react/LexicalComposer";
import type { EditorState } from "lexical";
import { SharedHistoryContext } from "@/components/GeneralComponents/LexicalEditor/context/SharedHistoryContext";
import { TableContext } from "@/components/GeneralComponents/LexicalEditor/plugins/TablePlugin";
import PlaygroundEditorTheme from "@/components/GeneralComponents/LexicalEditor/themes/PlaygroundEditorTheme";
import type { ComponentProps } from "react";
import { useCallback } from "react";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import CustomNodes from "./CustomNodes";
import PrescriptionPanelContainer from "./PrescriptionPanel/PrescriptionPanelContainer";
import { SharedAutocompleteContext } from "@/components/GeneralComponents/LexicalEditor/context/SharedAutocompleteContext";
import type { ClinicalEventsGetClinicalEventResponseData } from "@/components/generated/models";
import CommonNodes from "@/components/GeneralComponents/AppLexical/CommonNodes";
import PrescriptionEditor from "./PrescriptionEditor";

console.warn(
  "If you are profiling the playground app, please ensure you turn off the debug view. You can disable it by pressing on the settings control in the bottom-left of your screen and toggling the debug view setting."
);

export default function PrescriptionLexical({
  onErrorCallback,
  children,
  onChangeCallback,
  clinicalEvent,
}: {
  onErrorCallback?: (error: Error) => void;
  onChangeCallback?: (editorState: EditorState) => void;
  children?: React.ReactNode | null;
  clinicalEvent: ClinicalEventsGetClinicalEventResponseData["mainDb_clinicalEvent"];
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
      editorState: clinicalEvent?.report ?? undefined,
      namespace: "Prescription",
      nodes: [...CommonNodes, ...CustomNodes],
      onError,
      theme: PlaygroundEditorTheme,
    };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <SharedHistoryContext>
        <TableContext>
          <SharedAutocompleteContext>
            <>
              <div className="grid grid-cols-12">
                <div className="col-span-12 flex justify-end"></div>
                <div className="col-span-5">
                  <PrescriptionPanelContainer />
                </div>
                <div className="col-span-7 bg-white">
                  <PrescriptionEditor />
                  <OnChangePlugin onChange={onChange} />
                  {children}
                </div>
              </div>
            </>
          </SharedAutocompleteContext>
        </TableContext>
      </SharedHistoryContext>
    </LexicalComposer>
  );
}
