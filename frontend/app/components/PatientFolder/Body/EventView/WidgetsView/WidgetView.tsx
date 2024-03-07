import { useBoltStore } from "@/stores/boltStore";
import { useMemo } from "react";
import { getWidget } from "./getWidget";

function WidgetView() {
  const focusedDocument = useBoltStore((s) => s.focusedDocument);
  const widgets = useMemo(
    () =>
      focusedDocument ? (
        getWidget(focusedDocument)
      ) : (
        <div>Veuillez selectionner un document</div>
      ),
    [focusedDocument]
  );
  return (
    <div>
      {focusedDocument && (
        <div className=" w-full shadow-lg rounded-md border-slate-500 border-[1px] mb-5">
          <div className="font-bold underline p-4 text-center">
            {focusedDocument.d.documentType}: {focusedDocument.d.createdAt}
          </div>
        </div>
      )}
      <div>{widgets}</div>
    </div>
  );
}

export default WidgetView;
