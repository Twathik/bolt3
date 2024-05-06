import { PatientScannedDocumentsGetPatientScannedDocumentsResponseData } from "@/generated/models";
import { useMobileBoltStore } from "@/lib/stores/mobileBoltStore";
import { ConsultationPatient } from "@/lib/stores/mobileBoltStoresType";
import { BoltNavigationStackType } from "@/lib/types/navigationStackType";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Image } from "expo-image";
import React, { useCallback } from "react";
import { TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";

function PatientScannedDocumentButton({
  doc,
  patient,
}: {
  doc: PatientScannedDocumentsGetPatientScannedDocumentsResponseData["mainDb_patientScannedDocuments"][0];
  patient: ConsultationPatient;
}) {
  const authToken = useMobileBoltStore((s) => s.authToken);
  const navigation =
    useNavigation<NativeStackNavigationProp<BoltNavigationStackType>>();
  const onPress = useCallback(() => {
    navigation.navigate("ScannedPatientDocumentsPage", { doc, patient });
  }, []);
  return (
    <View className="flex flex-col">
      <View className="flex flex-row justify-center">
        <TouchableOpacity onPress={onPress}>
          <Image
            source={{
              uri: doc.documentCollectionUrls[0],
              headers: { Authorization: authToken },
            }}
            className="h-96 w-60 rounded-2xl"
          />
        </TouchableOpacity>
      </View>
      <View className="flex flex-row justify-center mt-4">
        <Text className="underline text-xl font-bold">
          {doc.documentCollectionName}
        </Text>
      </View>
    </View>
  );
}

export default PatientScannedDocumentButton;
