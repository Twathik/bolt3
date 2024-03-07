import { Badge } from "@/ui/components/ui/badge";
import { debounce } from "lodash-es";
import { useCallback, useRef } from "react";
import { DotLoader } from "react-spinners";
import { ClientOnly } from "remix-utils/client-only";
import { useMutation } from "@/lib/wundergraph";
import type { ClinicalEventsGetClinicalEventResponseData } from "@/components/generated/models";

// import Lexical from "@/components/GeneralComponents/LexicalEditor/Lexical";

function SonoRootComponent({
  clinicalEvent,
}: {
  clinicalEvent: ClinicalEventsGetClinicalEventResponseData["mainDb_clinicalEvent"];
}) {
  const { trigger, isMutating } = useMutation({
    operationName: "clinicalEvents/updateClinicalEventReport",
  });
  const save = useCallback(async () => {
    if (clinicalEvent?.id) console.log("saved");
  }, [clinicalEvent, trigger]);
  const debouncedFunction = useRef(debounce(save, 60000));

  const onChange = useCallback(async () => {
    console.log("changed");
  }, []);

  return (
    <div>
      <div className="mt-20">
        <ClientOnly
          fallback={
            <div className="w-full h-1/2 flex justify-center mt-20">
              <DotLoader />
            </div>
          }>
          {() => <>Sono editor</>}
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

export default SonoRootComponent;
