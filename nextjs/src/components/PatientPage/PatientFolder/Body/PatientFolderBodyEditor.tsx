"use client";
/* eslint-disable react/no-unescaped-entities */
import { useBoltStore } from "@/stores/boltStore";
import { DotLoader } from "react-spinners";
import { Suspense, lazy, useCallback, useMemo, useRef, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import type { Value } from "@udecode/plate-common";
import { FixedToolbar } from "@/components/plate-ui/fixed-toolbar";
import { FixedToolbarButtons } from "@/components/plate-ui/fixed-toolbar-buttons";
import useGetDocumentHeadersFromEditor from "./FolderHooks/useGetDocumentHeadersFromEditor";
import useDisableSaveButton from "./FolderHooks/useDisableSaveButton";
import useSavedDataNotifications from "./FolderHooks/useSavedDataNotifications";
import { debounce } from "lodash-es";
import { useMutation } from "@/components/wg-generated/nextjs";
import type { PatientsGetOnePatientResponseData } from "@/components/wg-generated/models";
import { BoltFolderMenu } from "./BoltMenuButtons/FolderMenuButtons";

const PlateEditor = lazy(() => import("@/components/plateEditor/plate"));

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

  const onEditorChange = useCallback(
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
      <Suspense
        fallback={
          <div className="w-full h-1/2 flex justify-center mt-20">
            <DotLoader />
          </div>
        }>
        <PlateEditor
          initialValue={initialValue}
          onEditorChange={onEditorChange}>
          <>
            <FixedToolbar>
              <FixedToolbarButtons
                boltMenu={BoltFolderMenu}
                saveCallback={update}
              />
            </FixedToolbar>
          </>
        </PlateEditor>
      </Suspense>
    </>
  );
}

export default PatientFolderBodyEditor;