import React from "react";
import { cookies } from "next/headers";
import { PatientSSR } from "../utils/Patient_SSR";

async function BottomPatientNavBar({ patientId }: { patientId: string }) {
  const SSr = new PatientSSR(cookies);
  const patient = await SSr.getPatient({ patientId });
  return (
    <div className="bottom-0 flex min-w-full">
      <div className="m-2 mx-auto mb-5 grid h-20  w-3/4 grid-cols-12 justify-center rounded-xl border-y-2 border-slate-800 px-4 py-4 shadow-lg sm:px-6">
        <div className="col-span-11">
          {patient ? (
            <>
              <span>{patient.lastName}</span>
              <span>{patient.firstName}</span>
              <span>{patient.ddn}</span>
            </>
          ) : (
            <span>
              Une erreur est survenue le dossier du patient n'a pas pu être
              réccupéré
            </span>
          )}
        </div>

        <div className="flex"> test</div>
      </div>
    </div>
  );
}

export default BottomPatientNavBar;
