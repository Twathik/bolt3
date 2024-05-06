import React, { useCallback } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { TogglePatientToListInterface } from "../utils/mainSearchPatientInterface";
import { ALERT_TYPE, Dialog } from "react-native-alert-notification";
import { useTheme } from "react-native-paper";
import { useMobileBoltStore } from "@/lib/stores/mobileBoltStore";
import {
  ConsultationListRegisterPatientInput,
  ConsultationListRegisterPatientResponse,
} from "@/generated/models";

const errorNotification = () =>
  Dialog.show({
    type: ALERT_TYPE.DANGER,
    title: "Erreur",
    textBody: "Le patient n'a pas été inscrit",
    button: "fermer",
  });
const SuccessNotification = () =>
  Dialog.show({
    type: ALERT_TYPE.SUCCESS,
    title: "Success",
    textBody: "Le patient a été inscrit à la consultation du jour",
    button: "fermer",
  });

function RegisterPatient({ id, setRegistered }: TogglePatientToListInterface) {
  const appAxios = useMobileBoltStore((s) => s.appAxios);
  const {
    colors: { primary },
  } = useTheme();

  const onPress = useCallback(async () => {
    try {
      const data: ConsultationListRegisterPatientInput = { patientId: id };
      const result =
        await appAxios.post<ConsultationListRegisterPatientResponse>(
          "/operations/consultationList/registerPatient",
          data
        );

      if (result.status === 200) {
        setRegistered(true);
        SuccessNotification();
      } else {
        errorNotification();
      }
    } catch (error) {
      errorNotification();
    }
  }, [setRegistered, id]);
  return (
    <FontAwesome5 name="list-ol" size={20} color={primary} onPress={onPress} />
  );
}

export default RegisterPatient;
