/* eslint-disable react/no-unescaped-entities */
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
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { HiQueueList } from "react-icons/hi2";
import { useCallback } from "react";
import { useMutation } from "@/components/wg-generated/nextjs";
import { format } from "date-fns";

function UnregisterButton({ listId }: { listId: string }) {
  const { toast } = useToast();
  const { trigger } = useMutation({
    operationName: "consultationList/unregisterPatient",
    onError: (e) => {
      toast({
        title: "Une erreur est survenue",
        description: "Le patient n'a pas pu être retiré en consultation",
        duration: 2000,
        variant: "destructive",
      });
    },
    onSuccess: async () => {
      toast({
        title: "Opération réussie",
        description: "Le patient a été retiré de la consultation",
        duration: 2000,
      });
    },
  });
  const noCallBack = useCallback(() => {}, []);
  const alertCallBack = useCallback(async () => {
    await trigger({
      patientId: listId,
      consultationDate: format(new Date(), "dd-MM-yyyy"),
    });
  }, [trigger, listId]);
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          className="font-semiboldntext-black relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border  border-transparent bg-rose-600 py-4 text-sm hover:bg-rose-700"
          onClick={noCallBack}
          disabled={false}
        >
          <>
            <span className="h-5 w-5 text-black" aria-hidden="true">
              <HiQueueList />
            </span>
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
            onClick={alertCallBack}
          >
            Valider
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default UnregisterButton;
