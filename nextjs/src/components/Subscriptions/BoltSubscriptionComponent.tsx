"use client";
import { useEffect } from "react";
import { useBoltStore } from "@/stores/boltStore";
import { useToast } from "../ui/use-toast";
import { useSubscription } from "../wg-generated/nextjs";
import PatientUpdateSubscription from "./PatientUpdateSubscription";
import WorkingListUpdateSubscription from "./WorkingListUpdateSubscription";
import SecondaryDisplaySubscription from "./SecondaryDisplaySubscription";
import ModalityUpdateSubscription from "./ModalityUpdateSubscription";
import MobileDevicesUpdateSubscription from "./MobileDevicesUpdateSubscription";
import FocusedDocumentSubscription from "./FocusedDocumentSubscription";
import ConsultationListSubscription from "./ConsultationListSubscription";

const BoltSubscriptionComponent = ({
  subscriptionIds,
}: {
  subscriptionIds: string[];
}) => {
  const { toast } = useToast();
  // const setSubscriptionIds = useBoltStore((s) => s.setSubscriptionIds);
  const consultationId = useBoltStore((s) => s.consultationState.id);
  const permanentIds = [consultationId ?? ""];
  const { data, error } = useSubscription({
    operationName: "AppSubscription/globalSubscription",
    input: { subscriptionSpecificId: [...permanentIds, ...subscriptionIds] },
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
  return (
    <>
      <PatientUpdateSubscription data={data?.mainDb_appSubscription} />
      <WorkingListUpdateSubscription data={data?.mainDb_appSubscription} />
      <SecondaryDisplaySubscription data={data?.mainDb_appSubscription} />
      <ModalityUpdateSubscription data={data?.mainDb_appSubscription} />
      <MobileDevicesUpdateSubscription data={data?.mainDb_appSubscription} />
      <FocusedDocumentSubscription data={data?.mainDb_appSubscription} />
      <ConsultationListSubscription data={data?.mainDb_appSubscription} />
    </>
  );
};

export default BoltSubscriptionComponent;
