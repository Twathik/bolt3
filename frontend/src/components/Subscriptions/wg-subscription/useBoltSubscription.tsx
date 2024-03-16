import { useToast } from "@/components/ui/use-toast";
import { useSubscription } from "@/components/wg-generated/nextjs";
import { useBoltStore } from "@/stores/boltStore";
import { useEffect } from "react";

function useBoltSubscription({
  subscriptionIds,
}: {
  subscriptionIds: string[];
}) {
  const { toast } = useToast();
  // const setSubscriptionIds = useBoltStore((s) => s.setSubscriptionIds);

  const consultationId = useBoltStore((s) => s.consultationState.id);
  const permanentIds = [consultationId ?? ""];
  const { data, error, isSubscribed } = useSubscription({
    operationName: "AppSubscription/globalSubscription",
    input: { subscriptionSpecificId: [...permanentIds, ...subscriptionIds] },
    resetOnMount: true,
  });
  /* 
  useEffect(() => {
    console.log({ isLoading, isSubscribed });
  }, [isLoading, isSubscribed]); */

  useEffect(() => {
    if (error) {
      toast({
        title: "Une erreur est survenue",
        description:
          "Une erreur reseau est survenu, veuiller rafraichir la page!",
        variant: "destructive",
      });
    }
  }, [error, toast]);
  useEffect(() => {
    console.log({ data });
  }, [data]);
  return {
    data,
    isSubscribed,
  };
}

export default useBoltSubscription;
