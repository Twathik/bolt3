import { useBoltStore } from "@/stores/boltStore";
import { useMemo } from "react";
import { v4 as uuid } from "uuid";
import GetDocumentButton from "./GetDocumentButton";
import DeleteDocumentButton from "./DeleteDocumentButton";

function EventView() {
  const documentHeaders = useBoltStore((s) => s.documentHeaders);

  const docs = useMemo(() => {
    return documentHeaders?.map((d) => (
      <div
        key={uuid()}
        className=" w-full shadow-lg rounded-md border-slate-500 border-[1px]">
        <div className="grid grid-cols-9">
          <div className="col-span-6 m-3">
            <div className="text-slate-800">{d.documentType}</div>
            <div className="text-slate-400 text-sm">{d.createdAt}</div>
          </div>
          <div className="col-span-3 flex flex-row justify-start items-center">
            <GetDocumentButton doc={d} />
            <DeleteDocumentButton doc={d} />
          </div>
        </div>
      </div>
    ));
  }, [documentHeaders]);
  return <div className="m-2 flex flex-col gap-2">{docs}</div>;
}

export default EventView;
