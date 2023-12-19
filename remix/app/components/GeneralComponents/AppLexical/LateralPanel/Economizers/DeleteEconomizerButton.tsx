import ConfirmationDialog from "@/components/GeneralComponents/ConfirmationDialog/confirmationDialog";
import type { EconomizersEconomizersResponseData } from "@/components/generated/models";
import { useMutation } from "@/lib/wundergraph";
import { useBoltStore } from "@/stores/boltStore";
import { Button } from "@/ui/components/ui/button";
import { useToast } from "@/ui/components/ui/use-toast";
import { ArrowPathIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useCallback, useEffect } from "react";

function DeleteEconomizerButton({
  economizer,
}: {
  economizer: EconomizersEconomizersResponseData["mainDb_economizers"][0];
}) {
  const { error, isMutating, trigger } = useMutation({
    operationName: "Economizers/deleteEconomizer",
  });
  const { toast } = useToast();
  const deleteEconomizer = useBoltStore((store) => store.deleteEconomizer);
  useEffect(() => {
    if (error) {
      toast({
        title: "Une erreur est survenue",
        description: "Les données de l'economiseur n'ont pas pu être supprimés",
        variant: "destructive",
      });
    }
  }, [error, toast]);
  const onDelete = useCallback(async () => {
    try {
      await trigger({ id: economizer.id });
      deleteEconomizer(economizer);
    } catch (error) {}
  }, [deleteEconomizer, economizer, trigger]);
  return (
    <ConfirmationDialog
      callback={onDelete}
      cancelButtonTitle="Annuler"
      confirmButtonTitle="Supprimer"
      titre="Suprimer les données de l'économiseur"
      description="Voulez vous vraiment suprimer les données de l'économiseur ?"
      triggerButton={
        <Button
          variant="destructive"
          className="text-sm leading-6 "
          disabled={isMutating}>
          {isMutating ? (
            <ArrowPathIcon
              className="h-5 w-5 flex-none text-white"
              aria-hidden="true"
            />
          ) : (
            <TrashIcon
              className="h-5 w-5 flex-none text-white"
              aria-hidden="true"
            />
          )}
        </Button>
      }
    />
  );
}

export default DeleteEconomizerButton;
