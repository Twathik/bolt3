import typesenseClient from "@/lib/typesense";
import { useCallback, useEffect, useRef, useState } from "react";
import type {
  SearchParams,
  SearchParamsWithPreset,
} from "typesense/lib/Typesense/Documents";
import { debounce } from "lodash-es";
import type {
  DrugHitInterface,
  DrugsInterface,
  DrugsSearchResponseInterface,
} from "@/lib/interfaces/DrugsInterfaces";
import { useBoltStore } from "@/stores/boltStore";
import { v4 as uuid } from "uuid";

export function usePrescriptionLookupService(
  prescriptionString: string | null
) {
  const [results, setResults] = useState<DrugsSearchResponseInterface | null>(
    null
  );
  const setLoadingPrescription = useBoltStore(
    (store) => store.setLoadingPrescription
  );

  const searchDrug = useCallback(
    async (prescriptionString: string | null) => {
      setLoadingPrescription(true);
      const params: SearchParams | SearchParamsWithPreset = {
        q: prescriptionString || "",
        query_by: "nomCommercial,DCI,dosage,labo,classPharmaco",
        include_fields:
          "id,nomCommercial,drugTemplate,labo,DCI,PPA,TR,vignetteColor,classPharmaco,classTherapeutique,conditionnement,liste,pays,remboursable,prodLocal,comercialisé,img,miniatureImageLink,dosage,forme",
        // sort_by: "priority:desc,charCount:asc",
        limit_hits: 10,
        page: 1,
        per_page: 10,
        search_cutoff_ms: 100,
      };
      const search_result = await typesenseClient
        .collections("drugs")
        .documents()
        .search(params);

      const hits: DrugHitInterface[] =
        search_result.hits?.map((hit) => {
          const {
            id,
            drugTemplate,
            labo,
            DCI,
            PPA,
            TR,
            nomCommercial,
            vignetteColor,
            classPharmaco,
            classTherapeutique,
            conditionnement,
            liste,
            pays,
            remboursable,
            prodLocal,
            comercialisé,
            img,
            miniatureImageLink,
            dosage,
            forme,
          } = hit.document as DrugsInterface;
          return {
            id,
            prescriptionId: uuid(),
            drugTemplate,
            labo,
            nomCommercial,
            DCI,
            PPA,
            TR,
            vignetteColor,
            classPharmaco,
            classTherapeutique,
            conditionnement,
            liste,
            pays,
            remboursable,
            prodLocal,
            comercialisé,
            img,
            miniatureImageLink,
            dosage,
            forme,
          };
        }) ?? [];
      setResults({
        hits,
        found: search_result.found,
        page: search_result.page,
        search_time_ms: search_result.search_time_ms,
      });
      setLoadingPrescription(false);
    },
    [setLoadingPrescription]
  );
  const debouncedSearch = useRef(debounce(searchDrug, 500));

  useEffect(() => {
    let triggerSearch = true;

    if (prescriptionString == null) {
      setResults(null);
      return;
    }

    const search = async () =>
      await debouncedSearch.current(prescriptionString);
    if (triggerSearch) search();
    return () => {
      setLoadingPrescription(false);
      triggerSearch = false;
    };
  }, [prescriptionString, setLoadingPrescription]);

  return results;
}
