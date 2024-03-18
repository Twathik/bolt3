"use client";
/* eslint-disable react/no-unescaped-entities */
import { useBoltStore } from "@/stores/boltStore";
import type { Dispatch, SetStateAction } from "react";
import { lazy, useCallback, useRef } from "react";
import { useToast } from "@/components/ui/use-toast";
import type { Value } from "@udecode/plate-common";
import { FixedToolbar } from "@/components/plate-ui/fixed-toolbar";
import { FixedToolbarButtons } from "@/components/plate-ui/fixed-toolbar-buttons";
import useGetDocumentHeadersFromEditor from "./FolderHooks/useGetDocumentHeadersFromEditor";
import useSavedDataNotifications from "./FolderHooks/useSavedDataNotifications";
import { debounce } from "lodash-es";
import { useMutation } from "@/components/wg-generated/nextjs";
import { BoltFolderMenu } from "./BoltMenuButtons/FolderMenuButtons";
import type { operationTypes } from "@/components/Subscriptions/operationTypes";

const PlateEditor = lazy(() => import("@/components/plateEditor/plate"));

function PatientFolderBodyEditor({
  patientId,
  clinicalData,
}: {
  patientId: string;
  clinicalData: string;
}) {
  const patient = useBoltStore((store) => store.patient);
  const { trigger: triggerSubscription, error: subscriptionError } =
    useMutation({ operationName: "AppSubscription/triggerAppSubscription" });
  const { toast } = useToast();
  const { trigger, data, error } = useMutation({
    operationName: "patients/updateOnePatientClinicalData",
  });

  const save = useCallback(
    async (state: string, setLoading?: Dispatch<SetStateAction<boolean>>) => {
      if (setLoading) setLoading(true);
      try {
        const p = await trigger({
          id: patientId,
          clinicalData: state,
        });
        if (setLoading) setLoading(false);
        if (p?.mainDb_updateOnePatient) {
          await triggerSubscription({
            global: true,
            appType: "patientUpdate",
            subscriptionSpecificId: patientId,
            appPayload: JSON.stringify({
              operation: "update-document" as operationTypes,
            }),
          });
        }
      } catch (error) {
        if (setLoading) setLoading(false);
        toast({
          title: "Une erreure est survenue !",
          description: "Le dossier n'a pas pu être sauvegardé",
          variant: "destructive",
        });
      }
    },
    [patientId, toast, trigger, triggerSubscription]
  );

  const update = useCallback(
    async (value: Value, setLoading?: Dispatch<SetStateAction<boolean>>) => {
      await save(JSON.stringify(value), setLoading);
    },
    [save]
  );

  useGetDocumentHeadersFromEditor({ document: clinicalData });
  useSavedDataNotifications({ data, error, subscriptionError });

  const debouncedFunction = useRef(debounce(update, 60000));

  const onEditorChange = useCallback(async (value: Value) => {
    debouncedFunction.current(value);
  }, []);

  return patient?.onTrash ? (
    <div className="col-span-2 m-auto flex items-center justify-center align-middle text-rose-800">
      Ce dossier n'est plus disponible, veuillez le retirer de la corbeille si
      vous souhaiter y apporter des modifications
    </div>
  ) : (
    patient && (
      <PlateEditor
        onEditorChange={onEditorChange}
        documentName={`${patient?.id}-clinicalData`}
        patientId={patientId}>
        <>
          <FixedToolbar>
            <FixedToolbarButtons
              boltMenu={BoltFolderMenu}
              saveCallback={update}
            />
          </FixedToolbar>
        </>
      </PlateEditor>
    )
  );
}

export default PatientFolderBodyEditor;
