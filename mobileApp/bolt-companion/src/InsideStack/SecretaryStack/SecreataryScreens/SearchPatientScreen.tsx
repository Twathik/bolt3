import React, { useCallback } from "react";

import { SearchClient } from "./utils/typesenseSearchClient";
import { InstantSearch } from "react-instantsearch-core";
import { AppSearchBox } from "./SearchPatientComponent/AppSearchBox";
import { AppInfiniteHits } from "./SearchPatientComponent/AppInfiniteHits";
import Hit from "./SearchPatientComponent/AppHit";
import debounce from "lodash.debounce";
import { ReadyState } from "react-use-websocket";
import { View } from "react-native";
import { Text } from "react-native-paper";
import useConsultationListUpdater from "./utils/useConsultationListUpdater";
import { useMobileBoltStore } from "@/lib/stores/mobileBoltStore";
import SubscribeToBoltSearch from "@/Websockets/HandleMessages/Subscriptions/SubscribeToBoltSearch";

function SearchPatientScreen() {
  const socket = useMobileBoltStore((s) => s.socket);
  const queryHook = useCallback(
    (query: string, search: (value: string) => void) => {
      const debouncedSearch = debounce(search, 500);
      return debouncedSearch(query);
    },
    []
  );
  useConsultationListUpdater();
  return (
    <InstantSearch
      indexName="patients"
      searchClient={SearchClient}
      future={{ preserveSharedStateOnUnmount: true }}
    >
      <AppSearchBox queryHook={queryHook} />
      {socket && socket.readyState === ReadyState.OPEN ? (
        <AppInfiniteHits hitComponent={Hit} />
      ) : (
        <View className="flex flex-row justify-center items-center p-10">
          <Text>Live server initialisation in progress....</Text>
        </View>
      )}
      <SubscribeToBoltSearch />
    </InstantSearch>
  );
}

export default SearchPatientScreen;
