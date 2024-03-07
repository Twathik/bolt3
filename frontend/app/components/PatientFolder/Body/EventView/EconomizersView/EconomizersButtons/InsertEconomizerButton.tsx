import ConfirmationDialog from "@/components/GeneralComponents/ConfirmationDialog/confirmationDialog";
import type { EconomizersEconomizersResponseData } from "@/components/generated/models";
import { useQuery } from "@/lib/wundergraph";
import { Button } from "@/ui/components/ui/button";
import { useToast } from "@/ui/components/ui/use-toast";
import { FaRegPaste } from "react-icons/fa6";
import { MdOutlineDownloading } from "react-icons/md";
import { useCallback, useEffect, useState } from "react";
import { useEditorRef } from "@udecode/plate-common";

function InsertEconomizerButton({
  economizer,
}: {
  economizer: EconomizersEconomizersResponseData["mainDb_economizers"][0];
}) {
  const { data, error, mutate, isLoading } = useQuery({
    operationName: "Economizers/economizerTemplate",
    input: { id: economizer.id },
  });
  const editor = useEditorRef();

  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (error) {
      toast({
        title: "Une erreur réseau est survenue",
        description:
          "Les données de l'economiseur n'ont pas pu être réccupérés",
        variant: "destructive",
      });
    }
  }, [error, toast]);

  const onInsert = useCallback(async () => {
    try {
      setLoading(true);
      const economizer = await mutate(data, {
        revalidate: true,
      });
      if (
        economizer?.mainDb_economizer &&
        economizer?.mainDb_economizer.template.length > 0
      ) {
        editor.insertFragment(
          JSON.parse(economizer.mainDb_economizer.template)
        );
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }, [data, editor, mutate]);
  return (
    <ConfirmationDialog
      callback={onInsert}
      cancelButtonTitle="Annuler"
      confirmButtonTitle="Inserer"
      titre="Importer les données de l'economiseur"
      description="Voulez vous vraiment importer les données de l'economiseur? le contenu actuel de l'editeur de text sera perdu!"
      triggerButton={
        <Button
          size="sm"
          disabled={loading || isLoading}
          variant="default"
          className="text-sm leading-6 bg-sky-800 hover:bg-sky-700">
          {loading ? (
            <span
              className="h-5 w-5 flex justify-center items-center text-white"
              aria-hidden="true">
              <MdOutlineDownloading />
            </span>
          ) : (
            <span
              className="h-5 w-5 flex justify-center items-center text-white"
              aria-hidden="true">
              <FaRegPaste />
            </span>
          )}
        </Button>
      }
    />
  );
}

export default InsertEconomizerButton;
