import { FaFolderOpen } from "react-icons/fa";
import RegisterButtonWithCheck from "./RegisterButton/RegisterButtonWithCheck";
import RegisterButtonWithoutCheck from "./RegisterButton/RegisterButtonWithoutCheck";
import { Button } from "@/ui/components/ui/button";
import parser from "html-react-parser";
import { useBoltStore } from "@/stores/boltStore";
import type { patientHit } from "@/lib/typesense/searchPatient";

const Hit = ({ hit }: { hit: patientHit }) => {
  const { id } = useBoltStore((store) => store.consultationState);
  const addTab = useBoltStore((store) => store.addTab);

  return (
    <div
      key={hit.id}
      className="col-span-1 my-4 divide-y divide-gray-200 rounded-lg bg-slate-100 shadow">
      <div className="flex w-full items-center justify-between space-x-6 p-2">
        <div className="flex-1 truncate">
          <div className="flex items-center space-x-3">
            <h3 className="truncate text-sm font-medium text-gray-900">
              <span className="mx-1">{parser(hit.lastName)}</span>
              <span className="mx-1">{parser(hit.firstName)}</span>
            </h3>
            <span
              className={`inline-flex flex-shrink-0 items-center rounded-full  px-1.5 py-0.5 text-xs font-medium  ring-1 ring-inset  ${
                hit.sexe === "M"
                  ? "bg-cyan-50 text-cyan-700 ring-cyan-600/20"
                  : "bg-rose-50 text-rose-700 ring-rose-600/20"
              }`}>
              {hit.sexe === "M" ? "Homme" : "Femme"}
            </span>
          </div>
          <p className="mt-1 truncate text-sm text-gray-500">
            Date de naissance :{hit?.formatted_ddn}
          </p>
        </div>

        <div className="flex-1">
          <div className="-mt-px flex items-center justify-center gap-4 divide-x divide-gray-200">
            {id ? (
              <RegisterButtonWithCheck consultationId={id} patientId={hit.id} />
            ) : (
              <RegisterButtonWithoutCheck patientId={hit.id} />
            )}

            <Button
              className="font-semiboldntext-black relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border  border-transparent bg-slate-200 py-4 text-sm hover:bg-slate-300"
              onClick={() => {
                const newWindow = window.open(
                  `/webapp/patient/${hit.id}`,
                  "_blank"
                );
                addTab(newWindow);
              }}>
              <>
                <span className="h-5 w-5 text-gray-400" aria-hidden="true">
                  <FaFolderOpen />
                </span>
                <span className="text-black">Ouvrir</span>
              </>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hit;
