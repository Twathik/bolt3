import { useMobileBoltStore } from "@/lib/stores/mobileBoltStore";
import React from "react";
import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import PatientScannedDocumentButton from "./PatientScannedDocumentButton";
import { ConsultationPatient } from "@/lib/stores/mobileBoltStoresType";

function PatientScannedDocumentsList({
  patient,
}: {
  patient: ConsultationPatient;
}) {
  const patientScannedDocuments = useMobileBoltStore(
    (s) => s.patientScannedDocuments
  );
  return (
    <FlatList
      data={patientScannedDocuments}
      keyExtractor={(item) => item.id}
      horizontal
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      /* onEndReached={() => {
        
      }} */
      ListEmptyComponent={() => (
        <View style={styles.item} className="flex flex-row justify-center ">
          <Text className="font-bold text-lg mx-12">
            Aucun resultat n'a ete retrouve
          </Text>
        </View>
      )}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <PatientScannedDocumentButton doc={item} patient={patient} />
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  separator: {
    height: 15,
  },
  item: {
    padding: 18,
  },
});

export default PatientScannedDocumentsList;
