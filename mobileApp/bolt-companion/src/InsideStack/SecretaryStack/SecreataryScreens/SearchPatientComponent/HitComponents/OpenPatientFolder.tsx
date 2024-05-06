import React, { useCallback } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { BoltNavigationStackType } from "@/lib/types/navigationStackType";
import { ConsultationPatient } from "@/lib/stores/mobileBoltStoresType";

function OpenPatientFolder({ patient }: { patient: ConsultationPatient }) {
  const navigation =
    useNavigation<NativeStackNavigationProp<BoltNavigationStackType>>();
  const {
    colors: { secondary },
  } = useTheme();
  const onPress = useCallback(() => {
    navigation.navigate("PatientFolder", { patient });
  }, [patient]);
  return (
    <FontAwesome
      name="folder-open"
      size={20}
      color={secondary}
      onPress={onPress}
    />
  );
}

export default OpenPatientFolder;
