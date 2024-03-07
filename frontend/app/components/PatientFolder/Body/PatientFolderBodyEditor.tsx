import { useBoltStore } from "@/stores/boltStore";
import { PlateEditor } from "@/ui/components/plateEditor/plate";
import { ClientOnly } from "remix-utils/client-only";
import { DotLoader } from "react-spinners";
import { useCallback, useMemo, useRef, useState } from "react";
import { useToast } from "@/ui/components/ui/use-toast";
import { type Value } from "@udecode/plate-common";
import { FixedToolbar } from "@/ui/components/plate-ui/fixed-toolbar";
import { FixedToolbarButtons } from "@/ui/components/plate-ui/fixed-toolbar-buttons";
import { BoltFolderMenu } from "@/components/PatientFolder/Body/BoltMenuButtons/FolderMenuButtons";
import { useMutation } from "@/lib/wundergraph";
import useGetDocumentHeadersFromEditor from "./FolderHooks/useGetDocumentHeadersFromEditor";
import useDisableSaveButton from "./FolderHooks/useDisableSaveButton";
import useSavedDataNotifications from "./FolderHooks/useSavedDataNotifications";
import { debounce } from "lodash-es";
import type { PatientsGetOnePatientResponseData } from "@/components/generated/models";

function PatientFolderBodyEditor() {
  const patient = useBoltStore((store) => store.patient);
  const [editorState, setEditorState] = useState<null | Value>(null);
  const { toast } = useToast();
  const { trigger, isMutating, data, error } = useMutation({
    operationName: "patients/updateOnePatientClinicalData",
  });
  const initialValue: Value = useMemo(
    () =>
      patient?.clinicalData
        ? JSON.parse(patient.clinicalData)
        : [{ type: "p", children: [{ text: "" }] }],

    [patient]
  );

  const update = useCallback(async () => {
    try {
      if (patient) {
        console.log({ editorState });
        await trigger({
          id: patient.id,
          clinicalData: JSON.stringify(editorState),
        });
      }
    } catch (error) {
      toast({
        title: "Une erreure est survenue !",
        description: "Le dossier n'a pas pu être sauvegardé",
        variant: "destructive",
      });
    }
  }, [editorState, patient, toast, trigger]);

  const autoUpdate = useCallback(
    async (
      value: Value,
      p: PatientsGetOnePatientResponseData["mainDb_getPatient"] | null
    ) => {
      try {
        if (p) {
          await trigger({
            id: p.id,
            clinicalData: JSON.stringify(value),
          });
        }
      } catch (error) {
        toast({
          title: "Une erreure est survenue !",
          description: "Le dossier n'a pas pu être sauvegardé",
          variant: "destructive",
        });
      }
    },
    [toast, trigger]
  );

  useGetDocumentHeadersFromEditor({ initialValue });
  useDisableSaveButton({ isMutating });
  useSavedDataNotifications({ data, error });

  const debouncedFunction = useRef(debounce(autoUpdate, 60000));

  const onChange = useCallback(
    async (value: Value) => {
      debouncedFunction.current(value, patient);
      setEditorState(value);
    },
    [patient]
  );

  return patient?.onTrash ? (
    <div className="col-span-2 m-auto flex items-center justify-center align-middle text-rose-800">
      Ce dossier n'est plus disponible, veuillez le retirer de la corbeille si
      vous souhaiter y apporter des modifications
    </div>
  ) : (
    <>
      <ClientOnly
        fallback={
          <div className="w-full h-1/2 flex justify-center mt-20">
            <DotLoader />
          </div>
        }>
        {() => (
          <PlateEditor initialValue={initialValue} onChange={onChange}>
            <>
              <FixedToolbar>
                <FixedToolbarButtons
                  boltMenu={BoltFolderMenu}
                  saveCallback={update}
                />
              </FixedToolbar>
            </>
          </PlateEditor>
        )}
      </ClientOnly>
    </>
  );
}

export default PatientFolderBodyEditor;
