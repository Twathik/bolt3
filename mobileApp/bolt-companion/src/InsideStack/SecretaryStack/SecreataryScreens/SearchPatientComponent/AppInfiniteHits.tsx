import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { useInfiniteHits, UseHitsProps } from "react-instantsearch-core";
import { Text } from "react-native-paper";

export function AppInfiniteHits({
  hitComponent: Hit,
  ...props
}: UseHitsProps & { hitComponent: React.ElementType }) {
  const { hits, isLastPage, showMore } = useInfiniteHits({
    ...props,
    escapeHTML: false,
  });

  return (
    <FlatList
      data={hits}
      keyExtractor={(item) => item.objectID}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      onEndReached={() => {
        if (!isLastPage) {
          showMore();
        }
      }}
      ListEmptyComponent={() => (
        <View style={styles.item}>
          <Text>Aucun resultat n'a ete retrouve</Text>
        </View>
      )}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Hit hit={item} />
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  separator: {
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  item: {
    padding: 18,
  },
});
