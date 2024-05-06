import { useBoltStore } from "@/stores/boltStore";
import { useMemo } from "react";
import { v4 as uuid } from "uuid";
import GetDocumentButton from "./GetDocumentButton";
import DeleteDocumentButton from "./DeleteDocumentButton";
import SendEventToSecondaryDisplayButton from "./SendEventToSecondaryDisplayButton";
import { generateDocumentType } from "@/lib/generalUtils/generateDucumentType";
import { cn } from "@/lib/utils";

function EventView() {
  const documentHeaders = useBoltStore((s) => s.documentHeaders);
  const focusedClinicalEvent = useBoltStore((s) => s.focusedClinicalEvent);

  const docs = useMemo(() => {
    return documentHeaders?.map((d) => (
      <div
        key={uuid()}
        className={cn(
          " w-full shadow-lg rounded-md border-slate-500 border-[1px]",
          focusedClinicalEvent?.eventId === d.eventId &&
            "border-amber-400 border-[2px]"
        )}
      >
        <div className="grid grid-cols-9">
          <div className="col-span-6 m-3">
            <div className="text-slate-800">
              {generateDocumentType({ eventType: d.documentType })}
            </div>
            <div className="text-slate-400 text-sm">{d.createdAt}</div>
          </div>
          <div className="col-span-3 flex flex-row justify-start items-center">
            <GetDocumentButton doc={d} />
            <DeleteDocumentButton doc={d} />
            <SendEventToSecondaryDisplayButton doc={d} />
          </div>
        </div>
      </div>
    ));
  }, [documentHeaders, focusedClinicalEvent?.eventId]);
  return <div className="m-2 flex flex-col gap-2">{docs}</div>;
}

export default EventView;
