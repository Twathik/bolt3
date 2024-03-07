import { classNames } from "@/lib/utils";

import SwitchModalityButton from "./SwitchModalityButton";
import UpdateModality from "./UpdateModality";
import type { ModalityModalitiesResponseData } from "@/components/wg-generated/models";

interface ModalitiesInterface {
  modality: ModalityModalitiesResponseData["mainDb_modalities"][0];
}
function Modality({ modality }: ModalitiesInterface) {
  const {
    id,
    modalityPseudo,
    modalityAETitle,
    modalityIpAddress,
    modalityPort,
    modalityType,
    enabled,
  } = modality;

  const getModalityType = () => {
    switch (modalityType) {
      case "US":
        return "Appareil d'echographie";
      case "XA":
        return "Salle de KT";
      default:
        throw Error("not recognized modality type");
    }
  };

  return (
    <li
      key={id}
      className="m-5 flex items-center justify-between gap-x-6 rounded-sm border-l-2 border-solid border-slate-400 bg-slate-50 p-5 py-5 shadow-lg">
      <div className="min-w-0">
        <div className="flex items-start gap-x-3">
          <p className="text-sm font-semibold leading-6 text-gray-900">
            {getModalityType()} : {modalityPseudo}
          </p>
          <p
            className={classNames(
              "mt-0.5 whitespace-nowrap rounded-md border-2 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset",
              enabled
                ? "border-green-500 text-green-500"
                : "border-rose-700 text-rose-700"
            )}>
            {enabled ? "active" : "déconnecté"}
          </p>
        </div>
        <div className="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
          <p className="whitespace-nowrap">
            configuration : {modalityAETitle} - {modalityIpAddress}:
            {modalityPort}
          </p>
        </div>
      </div>
      <div className="flex flex-none items-center gap-x-4">
        <SwitchModalityButton modality={modality} />
        <UpdateModality modality={modality} />
      </div>
    </li>
  );
}

export default Modality;
