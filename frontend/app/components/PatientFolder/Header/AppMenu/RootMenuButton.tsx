import type { ClinicalEventsGetClinicalEventsResponseData } from "@/components/generated/models";
import { useMutation } from "@/lib/wundergraph";
import { useToast } from "@/ui/components/ui/use-toast";
import { useNavigate } from "@remix-run/react";
import { useCallback, useEffect } from "react";
import PatientFolderHeaderListItem from "./PatientFolderHeaderListItem";

const RootMenuButton = ({
  key,
  patientId,
  eventType,
  errorMessage,
  buttonTitle,
  className,
}: {
  key: string;
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
    if (data) console.log({ data });
  }, [data, navigate]);

  return (
    <PatientFolderHeaderListItem
      key={key}
      disabled={isMutating}
      onClick={createClinicalDiagnostic}
      title={buttonTitle}
      className={className}
    />
  );
};

export default RootMenuButton;
