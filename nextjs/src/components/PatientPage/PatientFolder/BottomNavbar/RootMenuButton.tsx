import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import type { ClinicalEventsGetClinicalEventsResponseData } from "@/components/wg-generated/models";
import { useMutation } from "@/components/wg-generated/nextjs";
import { useRouter } from "next/navigation";

import { useCallback, useEffect } from "react";

const RootMenuButton = ({
  patientId,
  eventType,
  errorMessage,
  buttonTitle,
  className,
}: {
  patientId: string;
  eventType: ClinicalEventsGetClinicalEventsResponseData["mainDb_clinicalEvents"][0]["eventType"];
  errorMessage: string;
  buttonTitle: string;
  className: string;
}) => {
  const navigate = useRouter();
  const { toast } = useToast();
  const { trigger, isMutating, data } = useMutation({
    operationName: "clinicalEvents/createOneClinicalEvent",
  });
  const createClinicalDiagnostic = useCallback(async () => {
    try {
      await trigger({ patientId, eventType, eventCategory: "FOLDER" });
    } catch (error) {
      console.log({ error });
      toast({
        title: "Une erreur est survenue",
        description: errorMessage,
        variant: "destructive",
      });
    }
  }, [errorMessage, eventType, patientId, toast, trigger]);

  useEffect(() => {
    if (data)
      navigate.push(
        `/edit-clinical-event/${data.mainDb_createOneClinicalEvent.id}`
      );
  }, [data, navigate]);

  return (
    <Button
      disabled={isMutating}
      onClick={createClinicalDiagnostic}
      className={className}>
      {buttonTitle}
    </Button>
  );
};

export default RootMenuButton;
