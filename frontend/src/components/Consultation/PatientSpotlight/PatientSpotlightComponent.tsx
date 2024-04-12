import { badgeVariants } from "@/components/ui/badge";
import { useBoltStore } from "@/stores/boltStore";
import { UserIcon } from "lucide-react";
import Link from "next/link";
import React, { useCallback } from "react";
import CallPatient from "./CallPatient";
import CloseConsultation from "./CloseConsultation";
import SpotlightFilter from "./SpotlightFilter";

function PatientSpotlightComponent({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const patientSpotlights = useBoltStore((store) => store.displayedList);

  const closeAppSpotlight = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  return (
    <div>
      <SpotlightFilter />
      {patientSpotlights.map((p) => (
        <div key={p.patientId}>
          <div className="flex items-center justify-between gap-x-6 py-5 w-full">
            <div className="flex min-w-0 gap-x-4">
              <UserIcon className="w-6 h-6 text-slate-800" />
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  {p.label}
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                  {p.description}
                </p>
              </div>
            </div>
            <div className="flex gap-x-2 justify-end">
              <Link
                href={`/patient/${p.consultationList.patientId}/folder`}
                prefetch
                onClick={closeAppSpotlight}
                className={badgeVariants({
                  variant: "default",
                  className: "shadow-sm ring-1 ring-inset",
                })}
              >
                Ouvrir
              </Link>
              <CallPatient />
              <CloseConsultation patientSpotlight={p} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PatientSpotlightComponent;
