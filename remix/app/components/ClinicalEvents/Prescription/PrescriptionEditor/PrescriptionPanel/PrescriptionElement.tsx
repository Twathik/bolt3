import type { DrugHitInterface } from "@/lib/interfaces/DrugsInterfaces";
import PrescriptionMenu from "./PrescriptionMenu";

function PrescriptionElement({
  prescription,
}: {
  prescription: DrugHitInterface;
}) {
  return (
    <div className="flex justify-between gap-x-6 py-5">
      <div className="flex min-w-0 gap-x-4">
        <img
          className="h-12 w-12 flex-none rounded-full bg-gray-50"
          src={`http://pharmnet-dz.com/${prescription.img}`}
          alt=""
        />
        <div className="min-w-0 flex-auto">
          <p className="text-sm font-semibold leading-6 text-gray-900">
            {prescription.nomCommercial} {prescription.dosage}
          </p>
          <p className="mt-1 truncate text-xs leading-5 text-gray-500">
            {prescription.DCI}
          </p>
        </div>
      </div>
      <div className="flex shrink-0 items-center gap-x-6">
        <div className="hidden sm:flex sm:flex-col sm:items-end">
          <p className="text-sm leading-6 text-gray-900">
            {prescription.classTherapeutique}
          </p>
          <div className="mt-1 flex items-center gap-x-1.5">
            <div className="flex-none rounded-full bg-emerald-500/20 p-1">
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </div>
            <p className="text-xs leading-5 text-gray-500">Online</p>
          </div>
        </div>
        <PrescriptionMenu prescription={prescription} />
      </div>
    </div>
  );
}

export default PrescriptionElement;
