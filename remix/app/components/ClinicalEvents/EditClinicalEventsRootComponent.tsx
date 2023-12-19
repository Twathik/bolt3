import { Button } from "@/ui/components/ui/button";
import type {
  ClinicalEventsGetClinicalEventResponseData,
  DataTableGetDataTableConfigurationsResponseData,
  EconomizersEconomizersResponseData,
  ModalityGetSpecificModalitiesResponseData,
  WorkingListsWorkingListsResponseData,
} from "../generated/models";
import { getEditorRootComponent } from "../PatientFolder/utils";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "@remix-run/react";
import { useCallback, useEffect } from "react";
import { useBoltStore } from "@/stores/boltStore";

function EditClinicalEventsRootComponent({
  clinicalEvent,
  modalities,
  workingLists,
  editorConfigurationFiles,
  economizers,
}: {
  clinicalEvent: ClinicalEventsGetClinicalEventResponseData["mainDb_clinicalEvent"];
  modalities: ModalityGetSpecificModalitiesResponseData["mainDb_modalities"];
  workingLists: WorkingListsWorkingListsResponseData["mainDb_workingLists"];
  editorConfigurationFiles: DataTableGetDataTableConfigurationsResponseData["mainDb_getDataTableConfiguration"];
  economizers: EconomizersEconomizersResponseData["mainDb_economizers"];
}) {
  const router = useNavigate();

  const navigate = useCallback(() => {
    router(-1);
  }, [router]);
  const setClinicalEvent = useBoltStore((store) => store.setClinicalEvent);
  const setModalities = useBoltStore((store) => store.setModalities);
  const setWorkingLists = useBoltStore((store) => store.setWorkingLists);
  const setEditorConfiguration = useBoltStore(
    (store) => store.setEditorConfiguration
  );
  const setEconomizers = useBoltStore((store) => store.setEconomizers);

  useEffect(() => {
    setClinicalEvent(clinicalEvent);
    setModalities(modalities);
    setWorkingLists(workingLists);
    setEditorConfiguration(editorConfigurationFiles);
    setEconomizers(economizers);
  }, [
    clinicalEvent,
    economizers,
    editorConfigurationFiles,
    modalities,
    setClinicalEvent,
    setEconomizers,
    setEditorConfiguration,
    setModalities,
    setWorkingLists,
    workingLists,
  ]);
  return (
    <div className="bg-white">
      <div className="grid grid-cols-12">
        <div className="col-span-1 flex justify-start">
          <Button onClick={navigate}>
            <ChevronLeftIcon className="h-10 w-10 pr-2" /> Revenir
          </Button>
        </div>
      </div>
      {getEditorRootComponent({ clinicalEvent })}
    </div>
  );
}

export default EditClinicalEventsRootComponent;
