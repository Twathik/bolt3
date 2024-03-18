"use client";

import bolt_logo from "@/components/GeneralComponents/images/logo_bolt.png";

import Image from "next/image";
import Link from "next/link";
import { useBoltStore } from "@/stores/boltStore";
import { useEffect } from "react";
import { useQuery } from "@/components/wg-generated/nextjs";
import { useToast } from "@/components/ui/use-toast";
import FocusedPatientInformation from "./FocusedPatientInformation";

export default function PatientFolderHeader() {
  const { toast } = useToast();
  const patient = useBoltStore((s) => s.patient);
  const { data, error } = useQuery({
    operationName: "patients/getOnePatientInfo",
    input: { patientId: patient?.id ?? "" },
  });

  /* useEffect(() => {
    let req = true;
    console.log({ focusedPatientId });
    const reload = async () => {
      try {
        const d = await mutate(data, { revalidate: true });
        if (d?.mainDb_getPatient) setFocusedPatient(d.mainDb_getPatient);
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
  }, [focusedPatientId]); */

  useEffect(() => {
    if (error) {
      toast({
        title: "une erreur est survenue",
        description: "Les données du patient n'ont pas pu être réccupérés",
        variant: "destructive",
      });
    }
  }, [error, toast]);

  return (
    <header className="max-w-full bg-slate-800">
      <nav
        className="mx-auto flex flex-grow items-center justify-between gap-x-6 p-6 lg:px-8"
        aria-label="Global">
        <div className="flex items-center">
          <Link href="/search">
            <div className="flex item-center">
              <Image className="h-8 w-auto" src={bolt_logo} alt="" />
              <span className="mx-8 text-amber-400">BOLT 3</span>
            </div>
          </Link>

          <FocusedPatientInformation />
        </div>
      </nav>
    </header>
  );
}
