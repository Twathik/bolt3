import { Badge } from "@/ui/components/ui/badge";
import type { EditorState } from "lexical";
import { debounce } from "lodash-es";
import { useCallback, useEffect, useRef } from "react";
import { DotLoader } from "react-spinners";
import { ClientOnly } from "remix-utils/client-only";
import PrescriptionLexical from "./PrescriptionEditor/PrescriptionLexical";
import { useMutation } from "@/lib/wundergraph";
import type { ClinicalEventsGetClinicalEventResponseData } from "@/components/generated/models";
import { getPrescriptionFromEditorState } from "@/lib/utils";
import { useBoltStore } from "@/stores/boltStore";
// import Lexical from "@/components/GeneralComponents/LexicalEditor/Lexical";

function PrescriptionRootComponent({
  clinicalEvent,
}: {
  clinicalEvent: ClinicalEventsGetClinicalEventResponseData["mainDb_clinicalEvent"];
}) {
  const setInitialPrescriptions = useBoltStore(
    (store) => store.setInitialPrescriptions
  );
  const { trigger, isMutating } = useMutation({
    operationName: "clinicalEvents/updateClinicalEventReport",
  });
  const save = useCallback(
    async (editorState: EditorState) => {
      const prescriptions = getPrescriptionFromEditorState({
        editorState: editorState.toJSON(),
      });
      setInitialPrescriptions(prescriptions);

      if (clinicalEvent?.id)
        await trigger({
          id: clinicalEvent.id,
          report: JSON.stringify(editorState.toJSON()),
        });
    },
    [clinicalEvent, setInitialPrescriptions, trigger]
  );
  const debouncedFunction = useRef(debounce(save, 60000));

  const onChange = useCallback(async (editorState: EditorState) => {
    await debouncedFunction.current(editorState);
  }, []);

  useEffect(() => {
    const getPrescriptionsDetails = async () => {
      if (clinicalEvent === undefined) return;
      if (clinicalEvent.report === undefined) return;
      const prescriptions = getPrescriptionFromEditorState({
        editorState: JSON.parse(clinicalEvent.report),
      });
      setInitialPrescriptions(prescriptions);
    };
    getPrescriptionsDetails();
  }, [clinicalEvent, setInitialPrescriptions]);

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
            <PrescriptionLexical
              clinicalEvent={clinicalEvent}
              onChangeCallback={onChange}
              //initialState={template?.template}
            />
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

export default PrescriptionRootComponent;
