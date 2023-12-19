import type { WorkingListsWorkingListsResponseData } from "@/components/generated/models";
import { useMutation } from "@/lib/wundergraph";
import { Button } from "@/ui/components/ui/button";
import { useToast } from "@/ui/components/ui/use-toast";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useCallback, useEffect } from "react";

function DeleteWorkingListItem({
  workingList,
}: {
  workingList: WorkingListsWorkingListsResponseData["mainDb_workingLists"][0];
}) {
  const { error, isMutating, trigger } = useMutation({
    operationName: "WorkingLists/deleteOneWorkingList",
  });
  const { toast } = useToast();
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
    } catch (error) {}
  }, [trigger, workingList.id]);
  return (
    <Button variant="link" disabled={isMutating} onClick={remove}>
      <TrashIcon className="w-4 h-4" color="#7f1d1d" />
    </Button>
  );
}

export default DeleteWorkingListItem;
