import React, { useRef, useState } from "react";
import { View } from "react-native";
import { UseSearchBoxProps, useSearchBox } from "react-instantsearch-core";
import { Searchbar } from "react-native-paper";

export function AppSearchBox(props: UseSearchBoxProps) {
  const { query, refine } = useSearchBox(props);
  const [inputValue, setInputValue] = useState(query);
  const inputRef = useRef<any>(null);

  function setQuery(newQuery: string) {
    setInputValue(newQuery);
    refine(newQuery);
  }

  // Track when the InstantSearch query changes to synchronize it with
  // the React state.
  // We bypass the state update if the input is focused to avoid concurrent
  // updates when typing.
  if (query !== inputValue && !inputRef.current?.isFocused()) {
    setInputValue(query);
  }

  return (
    <View className="p-2 py-4">
      <Searchbar
        ref={inputRef}
        placeholder="Nom - Prénom - Année de naissance"
        onChangeText={setQuery}
        value={inputValue}
        clearButtonMode="while-editing"
        autoCapitalize="none"
        autoCorrect={false}
        spellCheck={false}
        autoComplete="off"
        onResponderTerminate={(e) => console.log("canceled")}
      />
    </View>
  );
}
