import ConfirmationDialog from "@/components/GeneralComponents/ConfirmationDialog/ConfirmationDialog";
import { useBoltStore } from "@/stores/boltStore";
import { HiMiniArrowPath } from "react-icons/hi2";
import { BsTrash3 } from "react-icons/bs";
import { useCallback, useEffect } from "react";
import type { EconomizersEconomizersResponseData } from "@/components/wg-generated/models";
import { useMutation } from "@/components/wg-generated/nextjs";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";

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
          size="sm"
          variant="destructive"
          className="text-sm leading-6 "
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
              <BsTrash3 />
            </span>
          )}
        </Button>
      }
    />
  );
}

export default DeleteEconomizerButton;
