import type { WorkingListsWorkingListsResponseData } from "@/components/generated/models";
import { useMutation } from "@/lib/wundergraph";
import { Button } from "@/ui/components/ui/button";
import { useToast } from "@/ui/components/ui/use-toast";
import {
  ArrowPathIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { useCallback, useEffect } from "react";

function DisplaySecondary({
  workingList,
}: {
  workingList: WorkingListsWorkingListsResponseData["mainDb_workingLists"][0];
}) {
  const { trigger, isMutating, error } = useMutation({
    operationName: "AppSubscription/triggerAppSubscription",
  });
  const { toast } = useToast();

  useEffect(() => {
    if (error) {
      toast({
        title: "Une erreur est survenue",
        description:
          "Une erreur reseau est survenu, veuiller rafraichir la page et reesayer",
        variant: "destructive",
      });
    }
  }, [error, toast]);
  const display = useCallback(async () => {
    try {
      const appPayload = JSON.stringify({
        id: workingList.linkId,
        displayType: "dicom",
        payload: JSON.stringify(workingList),
      });
      if (workingList.linkId) {
        await trigger({ appPayload, appType: "secondaryDisplay" });
      }
    } catch (error) {
      console.log({ error });
    }
  }, [trigger, workingList]);
  return (
    <Button onClick={display} variant="link" disabled={isMutating}>
      {isMutating ? (
        <ArrowPathIcon className="h-4 w-4" />
      ) : (
        <ArrowRightOnRectangleIcon className="w-4 h-4" />
      )}
    </Button>
  );
}

export default DisplaySecondary;
