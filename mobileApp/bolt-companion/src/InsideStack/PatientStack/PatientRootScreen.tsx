import { BoltNavigationStackType } from "@/lib/types/navigationStackType";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { ScrollView, View } from "react-native";
import { Avatar } from "react-native-paper";
import PatientAvatar from "./PatientAvatar";
import EditPatientForm from "./EditPatientForm";
import PatientHeader from "./PatientHeader";

type Props = NativeStackScreenProps<BoltNavigationStackType, "PatientFolder">;
function PatientRootScreen({
  route: {
    params: { patient },
  },
}: Props) {
  return (
    <ScrollView>
      {patient && (
        <View>
          <View>
            <PatientHeader patient={patient} />
          </View>
          <View className="flex flex-row w-full justify-center mt-10">
            <PatientAvatar patient={patient} />
          </View>
          <EditPatientForm patient={patient} />
        </View>
      )}
    </ScrollView>
  );
}

export default PatientRootScreen;
