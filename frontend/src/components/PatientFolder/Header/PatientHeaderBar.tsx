import React from "react";
import { PatientSSR } from "../utils/Patient_SSR";
import { cookies } from "next/headers";
import PatientInformation from "./PatientInformation";

async function PatientHeaderBar({ patientId }: { patientId: string }) {
  const SSR = new PatientSSR(cookies);
  const patient = await SSR.getPatient({ patientId });

  return (
    <div className="mx-auto my-2 flex h-20 w-[70%] items-center justify-center rounded-md border-y-2 border-slate-500 bg-gray-50 px-6 py-2 shadow-xl">
      <PatientInformation initialPatient={patient} />
    </div>
  );
}

export default PatientHeaderBar;
