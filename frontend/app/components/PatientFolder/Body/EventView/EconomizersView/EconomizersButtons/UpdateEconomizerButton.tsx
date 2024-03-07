import ConfirmationDialog from "@/components/GeneralComponents/ConfirmationDialog/confirmationDialog";
import type { EconomizersEconomizersResponseData } from "@/components/generated/models";
import { useMutation } from "@/lib/wundergraph";
import { Button } from "@/ui/components/ui/button";
import { useToast } from "@/ui/components/ui/use-toast";
import { HiMiniArrowPath } from "react-icons/hi2";
import { BsPencilSquare } from "react-icons/bs";
import { useCallback } from "react";
import { useEditorRef } from "@udecode/plate-common";
import getDocumentNodes from "@/ui/components/plate-app/utils/getDocumentNodes";
import { useBoltStore } from "@/stores/boltStore";
import removeIdsFromCopiedDocument from "@/ui/components/plate-app/utils/removeIdsFromCopiedDocument";

function UpdateEconomizerButton({
  economizer,
}: {
  economizer: EconomizersEconomizersResponseData["mainDb_economizers"][0];
}) {
  const { isMutating, trigger } = useMutation({
    operationName: "Economizers/updateEconomizer",
    onError: () => {
      toast({
        title: "Une erreur est survenue",
        description:
          "Les données de l'economiseur n'ont pas pu être mis à jour",
        variant: "destructive",
      });
    },
    onSuccess: () => {
      toast({
        title: "Succes de l'opération",
        description:
          "Les données de l'economiseur ont été mises à jour. veuillez rafraichir la page pour obtenir les données mise à jour de l'economiseur",
        variant: "default",
      });
    },
    revalidate: true,
  });
  const editor = useEditorRef();
  const { toast } = useToast();
  const focusedDocument = useBoltStore((s) => s.focusedDocument);

  const onUpdate = useCallback(async () => {
    if (focusedDocument) {
      try {
        const UpdatedEconomizer = getDocumentNodes({ editor, focusedDocument });
        const formatted = removeIdsFromCopiedDocument(UpdatedEconomizer);
        await trigger({
          id: economizer.id,
          template: JSON.stringify(formatted),
        });
      } catch (error) {}
    }
  }, [economizer.id, editor, focusedDocument, trigger]);

  return (
    <ConfirmationDialog
      callback={onUpdate}
      cancelButtonTitle="Annuler"
      confirmButtonTitle="Mettre à jour"
      titre="Mise à jour des données de l'economiseur"
      description={`Voulez vous utiliser le contenu actuel de l'editeur de text pour metre à jour l'economiseur "${economizer.name}".`}
      triggerButton={
        <Button
          size="sm"
          variant="default"
          className="text-sm leading-6"
          disabled={isMutating}>
          {isMutating ? (
            <span
              className="h-5 w-5 flex justify-center items-center text-white"
              aria-hidden="true">
              <HiMiniArrowPath />
            </span>
          ) : (
            <span
              className="h-5 w-5 flex justify-center items-center text-white"
              aria-hidden="true">
              <BsPencilSquare />
            </span>
          )}
        </Button>
      }
    />
  );
}

export default UpdateEconomizerButton;
