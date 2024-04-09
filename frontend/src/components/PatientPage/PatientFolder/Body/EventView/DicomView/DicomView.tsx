/* eslint-disable react/no-unescaped-entities */
import { useBoltStore } from "@/stores/boltStore";
import AddNewWorkingListItem from "./Dicom/AddNewWorkingListItem";
import { useEffect, useMemo } from "react";
import isDicomAvailable from "../../../../../../lib/utils/DicomUtils";
import WorkingLists from "./Dicom/WorkingLists";
import { useQuery } from "@/components/wg-generated/nextjs";
import { useToast } from "@/components/ui/use-toast";

function DicomIndex() {
  const focusedClinicalEvent = useBoltStore((s) => s.focusedClinicalEvent);
  const setWorkingLists = useBoltStore((s) => s.setWorkingLists);
  const dicomAvailable = useMemo(
    () => isDicomAvailable(focusedClinicalEvent),
    [focusedClinicalEvent]
  );
  const { data, error, isLoading } = useQuery({
    operationName: "WorkingLists/workingLists",
    input: { clinicalEventId: focusedClinicalEvent?.eventId ?? "" },
  });
  const { toast } = useToast();

  useEffect(() => {
    if (data) {
      setWorkingLists(data.mainDb_workingLists);
    }
  }, [data, setWorkingLists]);
  useEffect(() => {
    if (error) {
      toast({
        title: "Erreur reseau",
        description: "La liste de travail n'a pas pu être récuperrée",
        variant: "destructive",
      });
    }
  }, [error, toast]);

  if (!dicomAvailable) {
    return (
      <div className="w-full shadow-lg rounded-md border-slate-500 border-[1px] mb-5 text-center p-2">
        Il n'éxiste pas de serveur d'imagerie configuré pour ce type de
        documents
      </div>
    );
  }
  return (
    <div className="w-full shadow-lg rounded-md border-slate-500 border-[1px] mb-5 p-2">
      <AddNewWorkingListItem />

      {!isLoading && <WorkingLists />}
    </div>
  );
}

export default DicomIndex;
