import { useToast } from "@/components/ui/use-toast";
import { useQuery } from "@/components/wg-generated/nextjs";
import React, { useEffect } from "react";
import PatientSchedulingTable from "./PatientSchedulingTable/PatientSchedulingTable";
import { DotLoader } from "react-spinners";
import { useBoltStore } from "@/stores/boltStore";

function PatientScheduling({ patientId }: { patientId: string }) {
  const { data, error, isLoading } = useQuery({
    operationName: "clinicalEvents/getClinicalEvents",
    input: { patientId },
  });
  const setClinicalEvents = useBoltStore((s) => s.setClinicalEvents);

  const { toast } = useToast();
  useEffect(() => {
    if (error) {
      toast({
        title: "Une erreur est survenue",
        description: "Les données du patient n'ont pas pu etre réccupérés",
        variant: "destructive",
      });
    }
  }, [error, toast]);
  useEffect(() => {
    if (data?.mainDb_clinicalEvents) {
      setClinicalEvents(data?.mainDb_clinicalEvents);
    }
  }, [data?.mainDb_clinicalEvents, setClinicalEvents]);
  return (
    <div>
      {isLoading ? (
        <div className="w-full h-1/2 flex justify-center mt-20">
          <DotLoader />
        </div>
      ) : (
        data && <PatientSchedulingTable />
      )}
    </div>
  );
}

export default PatientScheduling;
