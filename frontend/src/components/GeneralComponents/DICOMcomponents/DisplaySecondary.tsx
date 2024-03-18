import { HiOutlineArrowPathRoundedSquare } from "react-icons/hi2";
import { FaCircleArrowRight } from "react-icons/fa6";
import { useCallback, useEffect } from "react";
import type { WorkingListsWorkingListsResponseData } from "@/components/wg-generated/models";
import { useMutation } from "@/components/wg-generated/nextjs";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";

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
        await trigger({
          appPayload,
          appType: "secondaryDisplay",
          global: false,
        });
      }
    } catch (error) {
      console.log({ error });
    }
  }, [trigger, workingList]);
  return (
    <Button onClick={display} variant="link" disabled={isMutating}>
      {isMutating ? (
        <span className="h-4 w-4">
          <HiOutlineArrowPathRoundedSquare />
        </span>
      ) : (
        <span className="w-4 h-4">
          <FaCircleArrowRight />
        </span>
      )}
    </Button>
  );
}

export default DisplaySecondary;
