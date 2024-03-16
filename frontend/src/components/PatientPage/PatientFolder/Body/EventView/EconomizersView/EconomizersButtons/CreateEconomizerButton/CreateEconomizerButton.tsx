import { FaFileCirclePlus } from "react-icons/fa6";
import { useCallback, useEffect } from "react";
import type { z } from "zod";
import EconomizerSchema from "./EconomizerSchema";
import { CreateEconomizerInputs } from "./EconomizerInputs";
import { useBoltStore } from "@/stores/boltStore";
import { useEditorRef } from "@udecode/plate-common";
import { useMutation } from "@/components/wg-generated/nextjs";
import { useToast } from "@/components/ui/use-toast";
import getDocumentNodes from "@/components/plateEditor/lib/getDocumentNodes";
import ConfirmationDialog from "@/components/GeneralComponents/ConfirmationDialog/ConfirmationDialog";
import AppFormBuilder from "@/components/GeneralComponents/FormBuilder/AppFormRoot/AppFormBuilder";
import { Button } from "@/components/ui/button";
import removeIdsFromCopiedDocument from "@/components/plateEditor/lib/removeIdsFromCopiedDocument";

function CreateEconomizerButton() {
  const focusedDocument = useBoltStore((s) => s.focusedDocument);
  const editor = useEditorRef();
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
    async ({ name }: z.infer<typeof EconomizerSchema>) => {
      if (focusedDocument) {
        try {
          const economizer = getDocumentNodes({ editor, focusedDocument });
          const formatted = removeIdsFromCopiedDocument(economizer);
          const eco = await trigger({
            eventType: focusedDocument.d.documentType,
            name,
            template: JSON.stringify(formatted),
          });
          if (eco?.mainDb_createOneEconomizer) {
            addEconomizer(eco.mainDb_createOneEconomizer);
          }
        } catch (error) {
          console.log({ error });
        }
      }
    },
    [addEconomizer, editor, focusedDocument, trigger]
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
          <span className="w-4 h-4 mr-2">
            <FaFileCirclePlus />
          </span>
          créer
        </Button>
      }
    />
  );
}

export default CreateEconomizerButton;
