import type { PatientsSearch_patientsResponseData } from "@/components/generated/models";
import React, { useCallback } from "react";
import Hit from "./BoltSearchHits";

function BoltSearchPagination({
  data,
  page,
  setPage,
}: {
  data: PatientsSearch_patientsResponseData;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}) {
  const isLast = page === Math.ceil(data.found / 5);
  const isFirst = page === 1;
  const addPage = useCallback(() => setPage((p) => p + 1), [setPage]);
  const subtractPage = useCallback(() => setPage((p) => p - 1), [setPage]);
  return (
    <div className="flex flex-col">
      {data.hits?.map((hit) => (
        <Hit key={hit.id} hit={hit} />
      ))}

      <nav
        className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
        aria-label="Pagination">
        <div className="hidden sm:block">
          <p className="text-sm text-gray-700">
            Showing{" "}
            <span className="font-medium">{data.hits.length * page}</span> of{" "}
            <span className="font-medium">{data.found}</span> results
          </p>
        </div>
        <div className="flex flex-1 justify-between sm:justify-end">
          <button
            disabled={isFirst}
            onClick={subtractPage}
            className="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0 disabled:opacity-25">
            Previous
          </button>

          <button
            disabled={isLast}
            onClick={addPage}
            className="relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0 disabled:opacity-25">
            Next
          </button>
        </div>
      </nav>
    </div>
  );
}

export default BoltSearchPagination;
