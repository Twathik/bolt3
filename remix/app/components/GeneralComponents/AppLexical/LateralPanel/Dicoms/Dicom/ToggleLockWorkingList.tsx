import type { WorkingListsWorkingListsResponseData } from "@/components/generated/models";
import { useMutation } from "@/lib/wundergraph";
import { Button } from "@/ui/components/ui/button";
import { useToast } from "@/ui/components/ui/use-toast";
import { LockClosedIcon, LockOpenIcon } from "@heroicons/react/24/outline";
import React, { useCallback, useEffect } from "react";

function ToggleLockWorkingList({
  workingList,
}: {
  workingList: WorkingListsWorkingListsResponseData["mainDb_workingLists"][0];
}) {
  const { error, trigger, isMutating } = useMutation({
    operationName: "WorkingLists/toggleLockWorkingList",
  });
  const { toast } = useToast();
  useEffect(() => {
    if (error)
      toast({
        title: "Une erreur est survenue",
        description: "Le status de l'element n'a pas pu être modifié!",
        variant: "destructive",
      });
  }, [error, toast]);
  const toggle = useCallback(async () => {
    try {
      await trigger({ id: workingList.id });
    } catch (error) {}
  }, [trigger, workingList.id]);
  return (
    <Button onClick={toggle} variant="link" disabled={isMutating}>
      {!workingList.locked ? (
        <LockOpenIcon className="w-4 h-4" color="#164e63" />
      ) : (
        <LockClosedIcon className="w-4 h-4" color="#7f1d1d" />
      )}
    </Button>
  );
}

export default ToggleLockWorkingList;
