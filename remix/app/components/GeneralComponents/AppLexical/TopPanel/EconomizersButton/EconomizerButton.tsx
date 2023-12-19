import ConfirmationDialog from "@/components/GeneralComponents/ConfirmationDialog/confirmationDialog";
import AppFormBuilder from "@/components/GeneralComponents/FormBuilder/AppFormRoot/AppFormBuilder";
import type { ClinicalEventsGetClinicalEventResponseData } from "@/components/generated/models";
import { useMutation } from "@/lib/wundergraph";
import { Button } from "@/ui/components/ui/button";
import { useToast } from "@/ui/components/ui/use-toast";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { useCallback, useEffect } from "react";
import type { z } from "zod";
import EconomizerSchema from "./EconomizerSchema";
import { CreateEconomizerInputs } from "./EconomizerInputs";
import { useBoltStore } from "@/stores/boltStore";

function EconomizerButton({
  clinicalEvent,
}: {
  clinicalEvent: ClinicalEventsGetClinicalEventResponseData["mainDb_clinicalEvent"];
}) {
  const [editor] = useLexicalComposerContext();
  const addEconomizer = useBoltStore((store) => store.addEconomizers);
  const { error, data, isMutating, trigger } = useMutation({
    operationName: "Economizers/createEconomizer",
  });

  const { toast } = useToast();

  useEffect(() => {
    if (data) {
      toast({
        title: "Succes de l'opération",
        description: "L'économiseur a bien été enregistré",
        variant: "default",
      });
    }
  }, [data, toast]);
  useEffect(() => {
    if (error) {
      toast({
        title: "Echec de l'opération",
        description: "L'économiseur n'a pas été enregistré",
        variant: "destructive",
      });
    }
  }, [error, toast]);

  const create = useCallback(
    ({ name }: z.infer<typeof EconomizerSchema>) => {
      editor.getEditorState().read(async () => {
        const editorState = editor.getEditorState().toJSON();

        if (clinicalEvent?.eventType) {
          try {
            const eco = await trigger({
              eventType: clinicalEvent.eventType,
              name,
              template: JSON.stringify(editorState),
            });
            if (eco?.mainDb_createOneEconomizer) {
              addEconomizer(eco.mainDb_createOneEconomizer);
            }
          } catch (error) {}
        }
      });
    },
    [addEconomizer, clinicalEvent?.eventType, editor, trigger]
  );

  return (
    <ConfirmationDialog
      callback={() => {}}
      cancelButtonTitle="Fermer"
      disableConfirmation={isMutating}
      description={
        <div>
          <AppFormBuilder
            formSchema={EconomizerSchema}
            defaultValues={{ name: "" }}
            mode="onSubmit"
            onSubmit={create}
            loading={isMutating}
            inputs={CreateEconomizerInputs}
          />
        </div>
      }
      showValidationButton={false}
      titre="Crée un économiseur"
      triggerButton={
        <Button className="bg-sky-900 hover:bg-sky-600">
          <PlusCircleIcon className="w-4 h-4 mr-2" /> Economiseur
        </Button>
      }
    />
  );
}

export default EconomizerButton;
