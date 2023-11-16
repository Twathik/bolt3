import { Badge } from "@/ui/components/ui/badge";
import type { EditorState } from "lexical";
import { debounce } from "lodash-es";
import { useCallback, useRef } from "react";
import { DotLoader } from "react-spinners";
import { ClientOnly } from "remix-utils/client-only";
import PrescriptionLexical from "./PrescriptionEditor/PrescriptionLexical";

function PrescriptionRootComponent() {
  const save = useCallback(async (editorState: EditorState) => {
    console.log({ editorState: editorState.toJSON() });
  }, []);
  const debouncedFunction = useRef(debounce(save, 2000));

  const onChange = useCallback(async (editorState: EditorState) => {
    await debouncedFunction.current(editorState);
  }, []);

  return (
    <div>
      <div className="mt-20">
        <div className="h-10 flex justify-end">
          {false && <Badge>sauvegarde en cours</Badge>}
        </div>
        <ClientOnly
          fallback={
            <div className="w-full h-1/2 flex justify-center mt-20">
              <DotLoader />
            </div>
          }>
          {() => (
            <PrescriptionLexical
              onChangeCallback={onChange}
              //initialState={template?.template}
            />
          )}
        </ClientOnly>
      </div>
    </div>
  );
}

export default PrescriptionRootComponent;
