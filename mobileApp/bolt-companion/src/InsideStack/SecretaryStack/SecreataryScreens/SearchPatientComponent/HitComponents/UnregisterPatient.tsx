import React, { useCallback, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { TogglePatientToListInterface } from "../utils/mainSearchPatientInterface";
import { Button, Dialog, Portal, Text, useTheme } from "react-native-paper";
import { View } from "react-native";
import { format } from "date-fns";
import { useMobileBoltStore } from "@/lib/stores/mobileBoltStore";
import {
  ConsultationListUnregisterPatientInput,
  ConsultationListUnregisterPatientResponse,
} from "@/generated/models";

function UnregisterPatient({
  id,
  setRegistered,
}: TogglePatientToListInterface) {
  const {
    colors: { error, secondary },
  } = useTheme();
  const [visible, setVisible] = useState(false);
  const appAxios = useMobileBoltStore((s) => s.appAxios);

  const show = useCallback(() => {
    setVisible(true);
  }, []);
  const hide = useCallback(() => {
    setVisible(false);
  }, []);

  const unregister = useCallback(async () => {
    try {
      const data: ConsultationListUnregisterPatientInput = {
        consultationDate: format(new Date(), "dd-MM-yyy"),
        patientId: id,
      };
      const result =
        await appAxios.post<ConsultationListUnregisterPatientResponse>(
          "operations/consultationList/unregisterPatient",
          data
        );

      if (
        result.status === 200 &&
        result.data.data?.mainDb_deleteOneConsultationList
      ) {
        setRegistered(false);
        setVisible(false);
      }
    } catch (error) {}
  }, [id]);
  return (
    <View>
      <FontAwesome onPress={show} name="remove" size={20} color={error} />
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
