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
import type { WorkingListsWorkingListsResponseData } from "@/components/wg-generated/models";
import { useMutation } from "@/components/wg-generated/nextjs";
import { useCallback, useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";

function DeleteWorkingListItem({
  workingList,
}: {
  workingList: WorkingListsWorkingListsResponseData["mainDb_workingLists"][0];
}) {
  const { error, isMutating, trigger } = useMutation({
    operationName: "WorkingLists/deleteOneWorkingList",
  });
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (error)
      toast({
        title: "Une erreur est survenue",
        description: "L'élement n'a pas pu être supprimé!",
        variant: "destructive",
      });
  }, [error, toast]);
  const remove = useCallback(async () => {
    try {
      await trigger({ id: workingList.id });
      setOpen(false);
    } catch (error) {}
  }, [trigger, workingList.id]);
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button variant="link" disabled={isMutating}>
          <span className="w-4 h-4" color="#7f1d1d">
            <FaTrash />
          </span>
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Etes vous sûr de vouloir continuer?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Voullez vous vraiment suprimer cet examen de vôtre liste de travail?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            className="bg-red-800 hover:bg-red-700 disabled:bg-red-300"
            disabled={isMutating}
            onClick={remove}
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default DeleteWorkingListItem;
