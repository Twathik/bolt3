import type { ClinicalEventsGetClinicalEventsResponseData } from "@/components/generated/models";
import { useMutation } from "@/lib/wundergraph";
import { Button } from "@/ui/components/ui/button";
import { useToast } from "@/ui/components/ui/use-toast";
import { useNavigate } from "@remix-run/react";
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
  const navigate = useNavigate();
  const { toast } = useToast();
  const { trigger, isMutating, data } = useMutation({
    operationName: "clinicalEvents/createOneClinicalEvent",
  });
  const createClinicalDiagnostic = useCallback(async () => {
    try {
      await trigger({ patientId, eventType });
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
      navigate(`/edit-clinical-event/${data.mainDb_createOneClinicalEvent.id}`);
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
