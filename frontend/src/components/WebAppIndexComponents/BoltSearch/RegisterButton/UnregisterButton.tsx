import ErrorNotification from "@/components/GeneralComponents/Notifications/ErrorNotification";
import SuccessNotification from "@/components/GeneralComponents/Notifications/SuccessNotification";

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
import { useMutation } from "@/components/wg-generated/nextjs";
import { QueueListIcon } from "@heroicons/react/24/outline";
import React from "react";
import toast from "react-hot-toast";

function UnregisterButton({
  listId,
  callBack,
}: {
  listId: string;
  callBack: () => Promise<void>;
}) {
  const { trigger } = useMutation({
    operationName: "consultationList/unregisterPatient",
    onError: () => {
      toast.custom(
        <ErrorNotification
          title="Une erreur est survenue"
          description="Le patient n'a pas pu être retiré en consultation"
          closeCallback={() => {
            toast.remove();
          }}
        />,
        {
          duration: 2000,
          position: "bottom-center",
        },
      );
    },
    onSuccess: async () => {
      await callBack();
      toast.custom(
        <SuccessNotification
          title="Opération réussie"
          description="Le patient a été retiré de la consultation"
          closeCallback={() => {
            toast.remove();
          }}
        />,
        { duration: 2000, position: "bottom-center" },
      );
    },
  });
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          className="font-semiboldntext-black relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border  border-transparent bg-rose-600 py-4 text-sm hover:bg-rose-700"
          onClick={() => {}}
          disabled={false}
        >
          <QueueListIcon className="h-5 w-5 text-black" aria-hidden="true" />

          <span className="text-white">Retirer</span>
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
            onClick={() => {
              trigger({ id: listId });
            }}
          >
            Valider
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default UnregisterButton;
