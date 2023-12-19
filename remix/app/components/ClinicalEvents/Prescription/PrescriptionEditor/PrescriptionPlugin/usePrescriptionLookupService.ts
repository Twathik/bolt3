import { useCallback, useEffect, useRef, useState } from "react";
import { debounce } from "lodash-es";
import type { DrugsSearchResponseInterface } from "@/lib/interfaces/DrugsInterfaces";
import { useBoltStore } from "@/stores/boltStore";
import searchPrescription from "@/lib/typesense/serachPrescription";
import createTypesenseClient from "@/lib/typesense/typesense";
import { useToast } from "@/ui/components/ui/use-toast";

export function usePrescriptionLookupService(
  prescriptionString: string | null
) {
  const [results, setResults] = useState<DrugsSearchResponseInterface | null>(
    null
  );
  const setLoadingPrescription = useBoltStore(
    (store) => store.setLoadingPrescription
  );
  const user = useBoltStore((store) => store.user);
  const { toast } = useToast();

  const searchDrug = useCallback(
    async (prescriptionString: string | null) => {
      if (prescriptionString) {
        setLoadingPrescription(true);
        const client = createTypesenseClient(user.searchApiKey);
        const search_result = await searchPrescription({
          client,
          searchParams: { query_string: prescriptionString },
        });
        if (search_result) {
          setResults({
            hits: search_result?.hits,
            found: search_result.found,
            page: search_result.page,
            search_time_ms: search_result.search_time_ms,
          });
        } else {
          toast({
            title: "erreur réseau",
            description: "Veuillez rafraichir la page",
            variant: "destructive",
          });
        }

        setLoadingPrescription(false);
      }
    },
    [setLoadingPrescription, toast, user.searchApiKey]
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
