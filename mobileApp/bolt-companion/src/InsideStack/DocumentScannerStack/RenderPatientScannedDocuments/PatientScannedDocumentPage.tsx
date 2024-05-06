import PatientHeader from "@/InsideStack/PatientStack/PatientHeader";
import { useMobileBoltStore } from "@/lib/stores/mobileBoltStore";
import { BoltNavigationStackType } from "@/lib/types/navigationStackType";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Image } from "expo-image";
import React from "react";
import { ScrollView, View } from "react-native";
import PatientScannedDocumentDeleteButton from "./PatientScannedDocumentDeleteButton";
import { Text } from "react-native-paper";

type Props = NativeStackScreenProps<
  BoltNavigationStackType,
  "ScannedPatientDocumentsPage"
>;
function PatientScannedDocumentPage({
  route: {
    params: { doc, patient },
  },
}: Props) {
  const authToken = useMobileBoltStore((s) => s.authToken);
  return (
    <View style={{ flex: 1, paddingBottom: 15 }}>
      <View>{patient && <PatientHeader patient={patient} />}</View>
      <View className="flex flex-row justify-center pb-10">
        <Text className="font-bold underline text-xl">
          {doc.documentCollectionName}
        </Text>
      </View>
      <ScrollView contentInset={{ bottom: 80 }} className="flex flex-col gap-4">
        {doc.documentCollectionUrls.map((uri) => (
          <View key={uri} className="flex flex-row justify-center">
            <Image
              source={{
                uri,
                headers: { Authorization: authToken },
              }}
              className="h-96 w-60 rounded-2xl"
            />
          </View>
        ))}
      </ScrollView>
      <View className="my-5 mx-20">
        <PatientScannedDocumentDeleteButton documentId={doc.id} />
      </View>
    </View>
  );
}

export default PatientScannedDocumentPage;
