import React, { useCallback, useEffect, useMemo } from "react";

import { SearchClient } from "./utils/typesenseSearchClient";
import { InstantSearch } from "react-instantsearch-core";
import { AppSearchBox } from "./SearchPatientComponent/AppSearchBox";
import { AppInfiniteHits } from "./SearchPatientComponent/AppInfiniteHits";
import Hit from "./SearchPatientComponent/AppHit";

import { getDate, getMonth, getYear } from "date-fns";
import useSpinnerStore from "../../../../lib/stores/spinnerStore";
import useConsultationStore from "../../../../lib/stores/consultationStore";
import {
  ConsultationListTodayConsultationInput,
  ConsultationListTodayConsultationResponse,
} from "../../../../generated/models";
import useWundergraphStore from "../../../../lib/stores/wundergraphStore";
import debounce from "lodash.debounce";

function SearchPatientScreen() {
  const { setAppSpinnerLoading } = useSpinnerStore();
  const { setConsultationId } = useConsultationStore();
  const { appAxios } = useWundergraphStore();

  const queryHook = useCallback(
    (query: string, search: (value: string) => void) => {
      const debouncedSearch = debounce(search, 500);
      return debouncedSearch(query);
    },
    []
  );

  useEffect(() => {
    setAppSpinnerLoading(true);
    const abortController = new AbortController();
    const todayConsultation = async () => {
      try {
        const today = new Date();
        const params: ConsultationListTodayConsultationInput = {
          day: getDate(today),
          month: getMonth(today),
          year: getYear(today),
        };

        const result =
          await appAxios.get<ConsultationListTodayConsultationResponse>(
            "/operations/consultationList/todayConsultation",
            {
              signal: abortController.signal,
              params,
            }
          );

        if (result.status === 200) {
          setConsultationId(
            result.data?.data?.mainDb_findFirstConsultation?.id ?? null
          );
        } else {
          setConsultationId(null);
        }
        setAppSpinnerLoading(false);
      } catch (error) {
        console.log({ error });
        if (abortController.signal.aborted) {
          console.log("aborted");
        }
        setConsultationId(null);
        setAppSpinnerLoading(false);
      }
    };
    todayConsultation();
    return () => abortController.abort("Data fetching cancelled");
  }, []);
  return (
    <InstantSearch
      indexName="patients"
      searchClient={SearchClient}
      future={{ preserveSharedStateOnUnmount: true }}>
      <AppSearchBox queryHook={queryHook} />
      <AppInfiniteHits hitComponent={Hit} />
    </InstantSearch>
  );
}

export default SearchPatientScreen;
