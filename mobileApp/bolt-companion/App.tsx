import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useAuth, useQuery, useUser } from "./lib/wundergraph";

export default function App() {
  const { data, isLoading, error } = useQuery({
    operationName: "Countries",
    input: { filter: { name: { eq: "Algeria" } } },
    onError: (e) => console.log({ e }),
  });

  return (
    <View style={styles.container}>
      {isLoading && <Text>Loading...</Text>}
      {data && (
        <View>
          {data.countries_countries?.map((dragon) => (
            <View style={styles.dragon} key={dragon.name}>
              <View style={dragon?.capital ? styles.active : styles.inactive} />
              <Text key={dragon.name}>{dragon.name} </Text>
            </View>
          ))}
        </View>
      )}
      {error && <Text>Something went wrong</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    color: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  dragon: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 2,
  },
  active: {
    borderRadius: 10,
    width: 10,
    height: 10,
    backgroundColor: "green",
    marginRight: 4,
  },
  inactive: {
    borderRadius: 10,
    width: 10,
    height: 10,
    backgroundColor: "gray",
    marginRight: 4,
  },
});
