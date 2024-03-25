import { useBoltStore } from "@/stores/boltStore";
import { useMemo } from "react";
import { getWidget } from "./getWidget";

function WidgetView() {
  const focusedClinicalEvent = useBoltStore((s) => s.focusedClinicalEvent);
  const widgets = useMemo(
    () =>
      focusedClinicalEvent ? (
        getWidget(focusedClinicalEvent)
      ) : (
        <div>Veuillez selectionner un document</div>
      ),
    [focusedClinicalEvent]
  );
  return (
    <div>
      {focusedClinicalEvent && (
        <div className=" w-full shadow-lg rounded-md border-slate-500 border-[1px] mb-5">
          <div className="font-bold underline p-4 text-center">
            {focusedClinicalEvent.eventType}: {focusedClinicalEvent.createdAt}
          </div>
        </div>
      )}
      <div>{widgets}</div>
    </div>
  );
}

export default WidgetView;
