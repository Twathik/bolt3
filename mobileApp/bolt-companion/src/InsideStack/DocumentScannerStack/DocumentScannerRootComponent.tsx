import { BoltNavigationStackType } from "@/lib/types/navigationStackType";
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import React, { useCallback, useEffect } from "react";
import { ScrollView, View, Text } from "react-native";
import PatientHeader from "../PatientStack/PatientHeader";

import SubscribeToPatientScannedDocumentsWebSocket from "./SubscribeToPatientScannedDocumentsWebSocket";
import { Button, useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { useMobileBoltStore } from "@/lib/stores/mobileBoltStore";
import {
  PatientScannedDocumentsGetPatientScannedDocumentsInput,
  PatientScannedDocumentsGetPatientScannedDocumentsResponse,
  PatientScannedDocumentsGetPatientScannedDocumentsResponseData,
} from "@/generated/models";
import { ALERT_TYPE, Dialog } from "react-native-alert-notification";
import PatientScannedDocumentsList from "./RenderPatientScannedDocuments/PatientScannedDocumentsList";

const errorNotification = () =>
  Dialog.show({
    type: ALERT_TYPE.DANGER,
    title: "Erreur",
    textBody:
      "Une erreur est survenue, les documents n'ont pas pu etre reccuperes",
    button: "fermer",
  });

type Props = NativeStackScreenProps<
  BoltNavigationStackType,
  "ScanPatientDocument"
>;
function DocumentScannerRootComponent({
  route: {
    params: { patient },
  },
}: Props) {
  const navigation =
    useNavigation<NativeStackNavigationProp<BoltNavigationStackType>>();
  const onPress = useCallback(() => {
    navigation.navigate("ScanDocument", { patient });
  }, [patient]);
  const {
    colors: { primary },
    dark,
  } = useTheme();
  const setPatientScannedDocuments = useMobileBoltStore(
    (s) => s.setPatientScannedDocuments
  );
  const appAxios = useMobileBoltStore((s) => s.appAxios);
  const setAppSpinnerLoading = useMobileBoltStore(
    (s) => s.setAppSpinnerLoading
  );

  const getDocuments = useCallback(
    async (abortController: AbortController) => {
      if (!patient) return errorNotification();
      setAppSpinnerLoading(true);

      try {
        const params: PatientScannedDocumentsGetPatientScannedDocumentsInput = {
          patientId: patient.id,
        };
        const result =
          await appAxios.get<PatientScannedDocumentsGetPatientScannedDocumentsResponse>(
            "/operations/PatientScannedDocuments/getPatientScannedDocuments",
            {
              signal: abortController.signal,
              params,
            }
          );

        if (result.status === 200) {
          setPatientScannedDocuments(
            result.data.data?.mainDb_patientScannedDocuments ?? []
          );
        }

        setAppSpinnerLoading(false);
      } catch (error) {
        if (abortController.signal.aborted) {
          console.log("aborted");
        }
        console.error(error);
        setAppSpinnerLoading(false);
      }
    },
    [patient, setAppSpinnerLoading, errorNotification, appAxios]
  );

  useEffect(() => {
    const abortController = new AbortController();
    getDocuments(abortController);
    return () => {
      abortController.abort();
    };
  }, [getDocuments, patient]);
  return (
    <View>
      {patient && (
        <View>
          <View>
            <PatientHeader patient={patient} />
          </View>
          <View>
            <Button
              className="mx-12"
              mode="elevated"
              icon="form-select"
              buttonColor={primary}
              textColor={dark ? "#000" : "#fff"}
              onPress={onPress}
            >
              Scanner un nouveau Document
            </Button>
          </View>
          <View className="">
            <PatientScannedDocumentsList patient={patient} />
          </View>
          <SubscribeToPatientScannedDocumentsWebSocket patientId={patient.id} />
        </View>
      )}
    </View>
  );
}

export default DocumentScannerRootComponent;
