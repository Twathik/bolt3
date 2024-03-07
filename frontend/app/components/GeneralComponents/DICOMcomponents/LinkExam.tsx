import type { WorkingListsWorkingListsResponseData } from "@/components/generated/models";
import { useMutation, useQuery } from "@/lib/wundergraph";
import { Button } from "@/ui/components/ui/button";
import { useToast } from "@/ui/components/ui/use-toast";

import React, { useCallback, useEffect } from "react";
import { HiOutlineArrowPathRoundedSquare } from "react-icons/hi2";
import { RingLoader } from "react-spinners";

function LinkExam({
  workingList,
}: {
  workingList: WorkingListsWorkingListsResponseData["mainDb_workingLists"][0];
}) {
  const { toast } = useToast();

  const { data, error, isLoading } = useQuery({
    operationName: "WorkingLists/linkExam",
    input: {
      workingListId: workingList.id,
    },
    liveQuery: true,
    enabled: true,
  });

  const { trigger: triggerRefresh, isMutating: isRefreshMutating } =
    useMutation({
      operationName: "WorkingLists/refreshLinkExam",
    });

  const { trigger, isMutating } = useMutation({
    operationName: "WorkingLists/linkWorkingList",
  });

  const refresh = useCallback(async () => {
    try {
      const data = await triggerRefresh({ workingListId: workingList.id });
      if (data) {
        await trigger({ id: workingList.id, linkId: data.linkId });
      }
    } catch (error) {
      toast({
        title: "Une erreur reseau est survenu",
        description:
          "Veuillez rafraichir la page pour mettre les informations à jour",
        variant: "destructive",
      });
    }
  }, [toast, trigger, triggerRefresh, workingList.id]);

  useEffect(() => {
    let update = false;
    if (data) {
      update = true;
      console.log({ data });
      const linkExam = async () => {
        try {
          await trigger({ id: workingList.id, linkId: data.linkId });
        } catch (error) {}
      };
      if (update) linkExam();
    }
    return () => {
      update = false;
    };
  }, [data, trigger, workingList.id]);

  useEffect(() => {
    if (error)
      toast({
        title: "Une erreur reseau est survenu",
        description:
          "Veuillez rafraichir la page pour mettre les informations à jour",
        variant: "destructive",
      });
  }, [error, toast]);

  return (
    <Button
      variant="link"
      onClick={refresh}
      disabled={isLoading || isMutating || isRefreshMutating}>
      {isLoading || isMutating || isRefreshMutating ? (
        <RingLoader size={20} color="#0f172a" />
      ) : (
        <span className="w-4 h-4">
          <HiOutlineArrowPathRoundedSquare />
        </span>
      )}
    </Button>
  );
}

export default LinkExam;
