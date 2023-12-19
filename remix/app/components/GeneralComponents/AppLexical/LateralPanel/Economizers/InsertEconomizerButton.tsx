import ConfirmationDialog from "@/components/GeneralComponents/ConfirmationDialog/confirmationDialog";
import type { EconomizersEconomizersResponseData } from "@/components/generated/models";
import { useQuery } from "@/lib/wundergraph";
import { Button } from "@/ui/components/ui/button";
import { useToast } from "@/ui/components/ui/use-toast";
import {
  ArrowDownOnSquareIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { useCallback, useEffect, useState } from "react";

function InsertEconomizerButton({
  economizer,
}: {
  economizer: EconomizersEconomizersResponseData["mainDb_economizers"][0];
}) {
  const { data, error, mutate, isLoading } = useQuery({
    operationName: "Economizers/economizerTemplate",
    input: { id: economizer.id },
  });

  const [editor] = useLexicalComposerContext();
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
        populateCache: true,
      });
      if (
        economizer?.mainDb_economizer &&
        economizer?.mainDb_economizer.template.length > 0
      ) {
        editor.setEditorState(
          editor.parseEditorState(economizer.mainDb_economizer.template)
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
          disabled={loading || isLoading}
          variant="default"
          className="text-sm leading-6 bg-sky-800 hover:bg-sky-700">
          {loading ? (
            <ArrowDownOnSquareIcon
              className="h-5 w-5 flex-none text-white"
              aria-hidden="true"
            />
          ) : (
            <ChevronRightIcon
              className="h-5 w-5 flex-none text-white"
              aria-hidden="true"
            />
          )}
        </Button>
      }
    />
  );
}

export default InsertEconomizerButton;
