import { Button } from "@/ui/components/ui/button";
import type { ClinicalEventsGetClinicalEventResponseData } from "../generated/models";
import { getRootComponent } from "../PatientFolder/utils";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "@remix-run/react";
import { useCallback } from "react";

function EditClinicalEventsRootComponent({
  clinicalEvent,
}: {
  clinicalEvent: ClinicalEventsGetClinicalEventResponseData["mainDb_clinicalEvent"];
}) {
  const router = useNavigate();

  const navigate = useCallback(() => {
    router(-1);
  }, [router]);
  return (
    <div className="bg-white">
      <div className="grid grid-cols-12">
        <div className="col-span-1 flex justify-start">
          <Button onClick={navigate}>
            <ChevronLeftIcon className="h-10 w-10 pr-2" /> Revenir
          </Button>
        </div>
      </div>
      {getRootComponent({ clinicalEvent })}
    </div>
  );
}

export default EditClinicalEventsRootComponent;
