"use client";

import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { Highlight } from "react-instantsearch";
import { format, parseISO } from "date-fns";

const Hit = ({ hit }: { hit: any }) => {
  return (
    <div
      key={hit.id}
      className="col-span-1 my-4 divide-y divide-gray-200 rounded-lg bg-slate-100 shadow"
    >
      <div className="flex w-full items-center justify-between space-x-6 p-2">
        <div className="flex-1 truncate">
          <div className="flex items-center space-x-3">
            <h3 className="truncate text-sm font-medium text-gray-900">
              <span className="mx-1">
                <Highlight hit={hit} attribute="lastName" />
              </span>
              <span className="mx-1">
                <Highlight hit={hit} attribute="firstName" />
              </span>
            </h3>
            <span
              className={`inline-flex flex-shrink-0 items-center rounded-full  px-1.5 py-0.5 text-xs font-medium  ring-1 ring-inset  ${
                hit.sexe === "M"
                  ? "bg-cyan-50 text-cyan-700 ring-cyan-600/20"
                  : "bg-rose-50 text-rose-700 ring-rose-600/20"
              }`}
            >
              {hit.sexe === "M" ? "Homme" : "Femme"}
            </span>
          </div>
          <p className="mt-1 truncate text-sm text-gray-500">
            Date de naissance : {format(parseISO(hit.ddn), "dd-MM-yyyy")}
          </p>
        </div>

        <div className="flex-1">
          <div className="-mt-px flex divide-x divide-gray-200">
            <div className="flex w-0 flex-1 hover:cursor-pointer hover:bg-slate-200">
              <a className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900">
                <EnvelopeIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                Email
              </a>
            </div>
            <div className="-ml-px flex w-0 flex-1 hover:cursor-pointer hover:bg-slate-200">
              <a className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900">
                <PhoneIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hit;
