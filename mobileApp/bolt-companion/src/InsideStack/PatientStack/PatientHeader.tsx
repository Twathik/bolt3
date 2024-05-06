import { ConsultationPatient } from "@/lib/stores/mobileBoltStoresType";
import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";

function PatientHeader({ patient }: { patient: ConsultationPatient }) {
  return (
    <View className="bg-slate-200 shadow-xl flex flex-row rounded-md m-5 p-5">
      <Text className="text-xl">{`${patient.lastName} ${patient.firstName} - ${patient.ddn}`}</Text>
    </View>
  );
}

export default PatientHeader;
