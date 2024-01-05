import { Badge } from "@/ui/components/ui/badge";
import type { EditorState } from "lexical";
import { debounce } from "lodash-es";
import { useCallback, useRef } from "react";
import { DotLoader } from "react-spinners";
import { ClientOnly } from "remix-utils/client-only";
import { useMutation } from "@/lib/wundergraph";
import type { ClinicalEventsGetClinicalEventResponseData } from "@/components/generated/models";
import ClinicalEventsLexical from "../ClinicalEventsLexical";
import TopPanel from "@/components/GeneralComponents/AppLexical/TopPanel/TopPanel";
import DiagnosticEditor from "./DiagnosticEditor";
// import Lexical from "@/components/GeneralComponents/LexicalEditor/Lexical";

function ClinicalDiagnosticRootComponent({
  clinicalEvent,
}: {
  clinicalEvent: ClinicalEventsGetClinicalEventResponseData["mainDb_clinicalEvent"];
}) {
  const { trigger, isMutating } = useMutation({
    operationName: "clinicalEvents/updateClinicalEventReport",
  });
  const save = useCallback(
    async (editorState: EditorState) => {
      if (clinicalEvent?.id)
        await trigger({
          id: clinicalEvent.id,
          report: JSON.stringify(editorState.toJSON()),
        });
    },
    [clinicalEvent, trigger]
  );
  const debouncedFunction = useRef(debounce(save, 60000));

  const onChange = useCallback(async (editorState: EditorState) => {
    await debouncedFunction.current(editorState);
  }, []);

  return (
    <div>
      <div className="mt-20">
        <ClientOnly
          fallback={
            <div className="w-full h-1/2 flex justify-center mt-20">
              <DotLoader />
            </div>
          }>
          {() => (
            <ClinicalEventsLexical
              clinicalEvent={clinicalEvent}
              onChangeCallback={onChange}>
              <>
                <TopPanel clinicalEvent={clinicalEvent} size="A4" />
                <DiagnosticEditor />
              </>
            </ClinicalEventsLexical>
          )}
        </ClientOnly>

        <div className="h-10 flex justify-end">
          {isMutating && (
            <Badge className="w-30 h-7 bg-red-800 text-sm text-white mx-40">
              sauvegarde en cours ...
            </Badge>
          )}
        </div>
      </div>
    </div>
  );
}

export default ClinicalDiagnosticRootComponent;
