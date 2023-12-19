import ConfirmationDialog from "@/components/GeneralComponents/ConfirmationDialog/confirmationDialog";
import type { EconomizersEconomizersResponseData } from "@/components/generated/models";
import { useMutation } from "@/lib/wundergraph";
import { Button } from "@/ui/components/ui/button";
import { useToast } from "@/ui/components/ui/use-toast";
import { ArrowPathIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { useCallback, useEffect } from "react";

function UpdateEconomizerButton({
  economizer,
}: {
  economizer: EconomizersEconomizersResponseData["mainDb_economizers"][0];
}) {
  const { isMutating, trigger, error } = useMutation({
    operationName: "Economizers/updateEconomizer",
  });
  const [editor] = useLexicalComposerContext();
  const { toast } = useToast();
  useEffect(() => {
    if (error) {
      toast({
        title: "Une erreur est survenue",
        description:
          "Les données de l'economiseur n'ont pas pu être mis à jour",
        variant: "destructive",
      });
    }
  }, [error, toast]);
  const onUpdate = useCallback(async () => {
    try {
      const editorState = editor.getEditorState().toJSON();
      await trigger({
        id: economizer.id,
        template: JSON.stringify(editorState),
      });
    } catch (error) {}
  }, [economizer.id, editor, trigger]);

  return (
    <ConfirmationDialog
      callback={onUpdate}
      cancelButtonTitle="Annuler"
      confirmButtonTitle="Mettre à jour"
      titre="Mise à jour des données de l'economiseur"
      description={`Voulez vous utiliser le contenu actuel de l'editeur de text pour metre à jour l'economiseur "${economizer.name}"`}
      triggerButton={
        <Button
          variant="default"
          className="text-sm leading-6"
          disabled={isMutating}>
          {isMutating ? (
            <ArrowPathIcon
              className="h-5 w-5 flex-none text-white"
              aria-hidden="true"
            />
          ) : (
            <PencilSquareIcon
              className="h-5 w-5 flex-none text-white"
              aria-hidden="true"
            />
          )}
        </Button>
      }
    />
  );
}

export default UpdateEconomizerButton;
