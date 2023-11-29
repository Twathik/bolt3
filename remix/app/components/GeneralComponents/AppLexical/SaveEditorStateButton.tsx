import type { ClinicalEventsGetClinicalEventResponseData } from "@/components/generated/models";
import { getPrescriptionFromEditorState } from "@/lib/utils";
import { useMutation } from "@/lib/wundergraph";
import { useBoltStore } from "@/stores/boltStore";
import { Button } from "@/ui/components/ui/button";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import React, { useCallback } from "react";

function SaveEditorStateButton({
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
  const [editor] = useLexicalComposerContext();
  const onSave = useCallback(() => {
    editor.getEditorState().read(async () => {
      const editorState = editor.getEditorState().toJSON();
      const prescriptions = getPrescriptionFromEditorState({
        editorState,
      });
      setInitialPrescriptions(prescriptions);

      if (clinicalEvent?.id)
        await trigger({
          id: clinicalEvent.id,
          report: JSON.stringify(editorState),
        });
    });
  }, [clinicalEvent, editor, setInitialPrescriptions, trigger]);
  return (
    <Button disabled={isMutating} onClick={onSave}>
      Sauvegarder
    </Button>
  );
}

export default SaveEditorStateButton;
