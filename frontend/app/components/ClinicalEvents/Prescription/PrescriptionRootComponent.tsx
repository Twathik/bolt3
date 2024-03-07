import { Badge } from "@/ui/components/ui/badge";
import { debounce } from "lodash-es";
import { useCallback, useEffect, useRef } from "react";
import { DotLoader } from "react-spinners";
import { ClientOnly } from "remix-utils/client-only";
import { useMutation } from "@/lib/wundergraph";
import type { ClinicalEventsGetClinicalEventResponseData } from "@/components/generated/models";

import { useBoltStore } from "@/stores/boltStore";
// import Lexical from "@/components/GeneralComponents/LexicalEditor/Lexical";

function PrescriptionRootComponent({
  clinicalEvent,
}: {
  clinicalEvent: ClinicalEventsGetClinicalEventResponseData["mainDb_clinicalEvent"];
}) {
  const setInitialPrescriptions = useBoltStore(
    (store) => store.setInitialPrescriptions
  );
  const { trigger, isMutating } = useMutation({
    operationName: "clinicalEvents/updateClinicalEventReport",
  });
  const save = useCallback(() => {
    console.log("saved");
  }, [clinicalEvent, setInitialPrescriptions, trigger]);
  const debouncedFunction = useRef(debounce(save, 60000));

  const onChange = useCallback(async () => {
    console.log("values changed");
  }, []);

  useEffect(() => {
    const getPrescriptionsDetails = async () => {
      if (clinicalEvent === undefined) return;
      if (clinicalEvent.report === undefined) return;
    };
    getPrescriptionsDetails();
  }, [clinicalEvent, setInitialPrescriptions]);

  return (
    <div>
      <div className="mt-20">
        <ClientOnly
          fallback={
            <div className="w-full h-1/2 flex justify-center mt-20">
              <DotLoader />
            </div>
          }>
          {() => <div>Prescriptions edirtor</div>}
        </ClientOnly>

        <div className="h-10 flex justify-end">
          {isMutating && (
            <Badge className="w-30 h-7 bg-red-800 text-sm text-white mx-40">
              sauvegarde en cours ...
            </Badge>
          )}
        </div>
      </div>
    </div>
  );
}

export default PrescriptionRootComponent;
