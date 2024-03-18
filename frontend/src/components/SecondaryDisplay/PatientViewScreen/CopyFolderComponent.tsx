"use client";
/* eslint-disable react/no-unescaped-entities */
import { DotLoader } from "react-spinners";
import { useEffect, useState } from "react";
import { useBoltStore } from "@/stores/boltStore";
import { useToast } from "@/components/ui/use-toast";
import { useQuery } from "@/components/wg-generated/nextjs";
import type { Value } from "@udecode/plate-common";
import ReadOnlyPlateEditor from "@/components/plateEditor/ReadOnlyPlateEditor";

function CopyFolderComponent() {
  const { toast } = useToast();
  const focusedPatientId = useBoltStore((s) => s.focusedPatientId);
  const [clinicalData, setClinicalData] = useState<Value | null>(null);
  const { data, isLoading, error, mutate } = useQuery({
    operationName: "patients/getPatientClinicalData",
    input: { patientId: focusedPatientId },
  });

  useEffect(() => {
    let req = true;
    const reload = async () => {
      try {
        const d = await mutate(data, { revalidate: true });
        if (d?.mainDb_getPatient?.clinicalData)
          setClinicalData(
            d?.mainDb_getPatient?.clinicalData.length > 0
              ? JSON.parse(d?.mainDb_getPatient?.clinicalData)
              : null
          );
      } catch (error) {
        toast({
          title: "une erreur est survenue",
          description: "Les données du patient n'ont pas pu être réccupérés",
          variant: "destructive",
        });
      }
    };
    if (req) reload();
    return () => {
      req = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focusedPatientId]);

  useEffect(() => {
    if (data?.mainDb_getPatient?.clinicalData) {
      setClinicalData(
        data.mainDb_getPatient.clinicalData.length > 0
          ? JSON.parse(data.mainDb_getPatient.clinicalData)
          : null
      );
    }
  }, [data, setClinicalData]);

  useEffect(() => {
    if (error) {
      toast({
        title: "une erreur est survenue",
        description: "Les données du patient n'ont pas pu être réccupérés",
        variant: "destructive",
      });
    }
  }, [error, toast]);

  /* const initialValue = useMemo(() => {
    console.log({ clinicalData });
    return clinicalData.length > 0 ? JSON.parse(clinicalData) : null;
  }, [clinicalData]); */

  return clinicalData ? (
    isLoading ? (
      <div className="w-full h-1/2 flex justify-center mt-20">
        <DotLoader />
      </div>
    ) : (
      <ReadOnlyPlateEditor initialValue={clinicalData} />
    )
  ) : (
    <div></div>
  );
}

export default CopyFolderComponent;
