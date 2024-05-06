import React, { useCallback, useEffect } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { ConsultationPatient } from "@/lib/stores/mobileBoltStoresType";
import { BoltNavigationStackType } from "@/lib/types/navigationStackType";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

function ScanPatientDocuments({ patient }: { patient: ConsultationPatient }) {
  const navigation =
    useNavigation<NativeStackNavigationProp<BoltNavigationStackType>>();
  const onPress = useCallback(
    () => navigation.navigate("ScanPatientDocument", { patient }),
    [patient]
  );

  return (
    <MaterialIcons
      name="document-scanner"
      size={20}
      color="black"
      onPress={onPress}
    />
  );
}

export default ScanPatientDocuments;
