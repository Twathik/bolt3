import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { MainSearchPatientInterface } from "../utils/mainSearchPatientInterface";
import { useTheme } from "react-native-paper";

function OpenPatientFolder({}: MainSearchPatientInterface) {
  const {
    colors: { secondary },
  } = useTheme();
  return <FontAwesome name="folder-open" size={30} color={secondary} />;
}

export default OpenPatientFolder;
