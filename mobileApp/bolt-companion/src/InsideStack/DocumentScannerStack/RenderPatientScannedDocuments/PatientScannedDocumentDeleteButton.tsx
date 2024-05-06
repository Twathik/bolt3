import { BoltNavigationStackType } from "@/lib/types/navigationStackType";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useCallback, useState } from "react";
import { View } from "react-native";
import { Button, Dialog, Portal, Text, useTheme } from "react-native-paper";
import {
  ALERT_TYPE,
  Dialog as NotificationDialog,
} from "react-native-alert-notification";
import { useMobileBoltStore } from "@/lib/stores/mobileBoltStore";

const errorNotification = () =>
  NotificationDialog.show({
    type: ALERT_TYPE.DANGER,
    title: "Erreur",
    textBody:
      "Une erreur est survenue, les documents n'ont pas pu etre supprime",
    button: "fermer",
  });

function PatientScannedDocumentDeleteButton({
  documentId,
}: {
  documentId: string;
}) {
  const {
    colors: { error, secondary },
    dark,
  } = useTheme();
  const navigation =
    useNavigation<NativeStackNavigationProp<BoltNavigationStackType>>();
  const [visible, setVisible] = useState(false);
  const show = useCallback(() => {
    setVisible(true);
  }, []);
  const hide = useCallback(() => {
    setVisible(false);
  }, []);
  const setAppSpinnerLoading = useMobileBoltStore(
    (s) => s.setAppSpinnerLoading
  );
  const appAxios = useMobileBoltStore((s) => s.appAxios);

  const onPress = useCallback(async () => {
    if (!documentId) return errorNotification();

    setAppSpinnerLoading(true);
    const abortController = new AbortController();

    const formData = new FormData();

    formData.append("documentId", documentId);

    try {
      const result = await appAxios.post(
        "http://bolt3.local/patientDocumentUploader/remove",
        formData,
        {
          signal: abortController.signal,
          headers: {
            "Content-Type": "multipart/form-data",
          },
          transformRequest: () => formData,
        }
      );

      if (result.status === 200) {
        setAppSpinnerLoading(false);
        hide();
        navigation.goBack();
      }
    } catch (error) {
      //console.error(error);
      setAppSpinnerLoading(false);
      hide();
      errorNotification();
    }
  }, [errorNotification, appAxios, documentId]);
  return (
    <View>
      <Button
        buttonColor={error}
        textColor={dark ? "#000" : "#fff"}
        onPress={show}
      >
        Delete
      </Button>
      <Portal>
        <Dialog visible={visible} onDismiss={hide}>
          <Dialog.Title>Attention</Dialog.Title>
          <Dialog.Content>
            <Text variant="bodyMedium">
              Voulez-vous vraiment supprimer ce document
            </Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hide}>Fermer</Button>
            <Button onPress={onPress} textColor={secondary}>
              Valider
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
}

export default PatientScannedDocumentDeleteButton;
