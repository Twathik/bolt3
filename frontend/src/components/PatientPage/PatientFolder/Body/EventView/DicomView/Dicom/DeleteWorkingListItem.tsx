import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import type { WorkingListsWorkingListsResponseData } from "@/components/wg-generated/models";
import { useMutation } from "@/components/wg-generated/nextjs";
import { useCallback, useEffect } from "react";
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
      <span className="w-4 h-4" color="#7f1d1d">
        <FaTrash />
      </span>
    </Button>
  );
}

export default DeleteWorkingListItem;
