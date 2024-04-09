import React, { useEffect } from "react";
import SubscribeToPatientDicomView from "../subscriptionsHandlers/SubscribeToPatientDicomView";
import { useQuery } from "@/components/wg-generated/nextjs";
import { useToast } from "@/components/ui/use-toast";
import { useBoltStore } from "@/stores/boltStore";
import DiacomTable from "./DicomTable/DiacomTable";

function DicomRootComponent({ patientId }: { patientId: string }) {
  const { data, error } = useQuery({
    operationName: "WorkingLists/patientWorkingLists",
    input: { patientId },
  });
  const { toast } = useToast();
  const setWorkingLists = useBoltStore((s) => s.setWorkingLists);

  useEffect(() => {
    if (error)
      toast({
        title: "Erreur reseau",
        description: "Les examens d'imageries n'ont pas pu être réccuperés",
        variant: "destructive",
      });
  }, [error, toast]);
  useEffect(() => {
    if (data) {
      setWorkingLists(data.mainDb_workingLists);
      console.log({ data });
    }
  }, [data, setWorkingLists]);
  return (
    <div>
      <div className=" shadow-xl rounded-lg border-[1px] border-slate-300 m-16">
        <DiacomTable />
      </div>

      <SubscribeToPatientDicomView patientId={patientId} />
    </div>
  );
}

export default DicomRootComponent;
