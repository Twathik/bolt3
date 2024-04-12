import { useEffect } from "react";
import { useToast } from "../../ui/use-toast";
import { useBoltStore } from "@/stores/boltStore";
import { useQuery } from "../../wg-generated/nextjs";
import { format, parseISO } from "date-fns";

function useConsultationListUpdater({
  refreshInterval,
}: {
  refreshInterval: number;
}) {
  const { toast } = useToast();
  const setPatientSpotlights = useBoltStore((s) => s.setPatientsSpotlights);
  const setDisplayedList = useBoltStore((s) => s.setDisplayedList);
  const { data, error } = useQuery({
    operationName: "consultationList/todayConsultation",
    input: { consultationDate: format(new Date(), "dd-MM-yyyy") },
    refreshInterval,
    revalidateOnFocus: true,
    revalidateOnMount: true,
    revalidateOnReconnect: true,
  });
  useEffect(() => {
    if (error)
      toast({
        title: "une erreur reseau est survenue",
        description:
          "La liste des consultations du jour n'a pas pu être reccupérée",
        variant: "destructive",
      });
  }, [error, toast]);
  useEffect(() => {
    if (data && data.mainDb_consultationLists) {
      setPatientSpotlights(
        data.mainDb_consultationLists.map((c) => ({
          consultationDate: c.consultationDate,
          consultationList: c,
          patientId: c.patientId,
          id: c.id,
          label: `${c.patient.lastName} ${c.patient.firstName}`,
          description: `DDN : ${format(
            parseISO(c.patient.ddn),
            "dd-MM-yyyy"
          )} - sexe: ${c.patient.sexe === "F" ? "Femme" : "Homme"}`,
        }))
      );
      setDisplayedList(5);
    }
  }, [data, setDisplayedList, setPatientSpotlights]);
  return null;
}

export default useConsultationListUpdater;
