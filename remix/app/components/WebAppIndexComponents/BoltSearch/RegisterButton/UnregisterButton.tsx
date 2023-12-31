import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/ui/components/ui/alert-dialog";
import { Button } from "@/ui/components/ui/button";
import { useToast } from "@/ui/components/ui/use-toast";
import { QueueListIcon } from "@heroicons/react/24/outline";
import { useCallback } from "react";
import { useMutation } from "@/lib/wundergraph";
import { useBoltStore } from "@/stores/boltStore";

function UnregisterButton({
  listId,
  callBack,
}: {
  listId: string;
  callBack: () => Promise<void>;
}) {
  const { id: consultationId } = useBoltStore(
    (store) => store.consultationState
  );

  const { toast } = useToast();
  const { trigger } = useMutation({
    operationName: "consultationList/unregisterPatient",
    onError: () => {
      toast({
        title: "Une erreur est survenue",
        description: "Le patient n'a pas pu être retiré en consultation",
        duration: 2000,
        variant: "destructive",
      });
    },
    onSuccess: async () => {
      await callBack();
      toast({
        title: "Opération réussie",
        description: "Le patient a été retiré de la consultation",
        duration: 2000,
      });
    },
  });
  const noCallBack = useCallback(() => {}, []);
  const alertCallBack = useCallback(() => {
    if (consultationId) {
      trigger({
        patientId: listId,
        consultationId: consultationId,
      });
    } else {
      toast({
        title: "Une erreur est survenue",
        description: "Le patient n'a pas pu être retiré en consultation",
        duration: 2000,
        variant: "destructive",
      });
    }
  }, [trigger, consultationId, listId, toast]);
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          className="font-semiboldntext-black relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border  border-transparent bg-rose-600 py-4 text-sm hover:bg-rose-700"
          onClick={noCallBack}
          disabled={false}>
          <>
            <QueueListIcon className="h-5 w-5 text-black" aria-hidden="true" />
            <span className="text-white">Retirer</span>
          </>
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Voulez vous vraiment retirer ce patient de la liste des
            consultatnts?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Le dossier du patient n'apparaitra plus dans la liste de travail de
            la consultation du jour!
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Annuler</AlertDialogCancel>
          <AlertDialogAction
            className="bg-rose-600 hover:bg-rose-700"
            onClick={alertCallBack}>
            Valider
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default UnregisterButton;
