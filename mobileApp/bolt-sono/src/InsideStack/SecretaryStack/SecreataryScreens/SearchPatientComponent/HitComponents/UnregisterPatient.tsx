import React, { useCallback, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import {
  MainSearchPatientInterface,
  TogglePatientToListInterface,
} from "../utils/mainSearchPatientInterface";
import { Button, Dialog, Portal, Text, useTheme } from "react-native-paper";
import { View } from "react-native";
import useWundergraphStore from "../../../../../../lib/stores/wundergraphStore";
import {
  ConsultationListUnregisterPatientInput,
  ConsultationListUnregisterPatientResponse,
} from "../../../../../../generated/models";
import useConsultationStore from "../../../../../../lib/stores/consultationStore";

function UnregisterPatient({
  id,
  setRegistered,
}: TogglePatientToListInterface) {
  const {
    colors: { error, secondary },
  } = useTheme();
  const [visible, setVisible] = useState(false);
  const { appAxios } = useWundergraphStore();
  const { consultationId } = useConsultationStore();

  const show = useCallback(() => {
    setVisible(true);
  }, []);
  const hide = useCallback(() => {
    setVisible(false);
  }, []);

  const unregister = useCallback(async () => {
    if (consultationId)
      try {
        const data: ConsultationListUnregisterPatientInput = {
          consultationId,
          patientId: id,
        };
        const result =
          await appAxios.post<ConsultationListUnregisterPatientResponse>(
            "operations/consultationList/unregisterPatient",
            data
          );
        console.dir({ result }, { depth: 5, color: true });
        if (
          result.status === 200 &&
          result.data.data?.mainDb_deleteOneConsultationList
        ) {
          setRegistered(false);
          setVisible(false);
        }
      } catch (error) {}
  }, []);
  return (
    <View>
      <FontAwesome onPress={show} name="remove" size={30} color={error} />
      <Portal>
        <Dialog visible={visible} onDismiss={hide}>
          <Dialog.Title>Alert</Dialog.Title>
          <Dialog.Content>
            <Text variant="bodyMedium">This is simple dialog</Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hide}>Fermer</Button>
            <Button onPress={unregister} textColor={secondary}>
              Valider
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
}

export default UnregisterPatient;
