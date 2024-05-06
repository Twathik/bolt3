import { BoltNavigationStackType } from "@/lib/types/navigationStackType";
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import React, { useCallback, useState } from "react";
import { ScrollView, View, Text } from "react-native";
import PatientHeader from "../PatientStack/PatientHeader";
import DocumentScanner from "react-native-document-scanner-plugin";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Button, TextInput, useTheme } from "react-native-paper";
import { DatePickerInput } from "react-native-paper-dates";
import { ALERT_TYPE, Dialog } from "react-native-alert-notification";
import { useNavigation } from "@react-navigation/native";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { PatientScannerDocumentSchema } from "./PatientScannerDocumentSchema";
import { useMobileBoltStore } from "@/lib/stores/mobileBoltStore";
import { v4 as uuid } from "uuid";
import mime from "mime";
import { Image } from "expo-image";

const FormData = global.FormData;

const errorNotification = () =>
  Dialog.show({
    type: ALERT_TYPE.DANGER,
    title: "Erreur",
    textBody:
      "Une erreur est survenue, les documents n'ont pas pu etre enregistre",
    button: "fermer",
  });

const noFileErrorNotification = () =>
  Dialog.show({
    type: ALERT_TYPE.DANGER,
    title: "Erreur",
    textBody: "Veuillez scanner des documents",
    button: "fermer",
  });

type Props = NativeStackScreenProps<BoltNavigationStackType, "ScanDocument">;
function DocumentScannerPageComponent({
  route: {
    params: { patient },
  },
}: Props) {
  const navigation =
    useNavigation<NativeStackNavigationProp<BoltNavigationStackType>>();
  const setAppSpinnerLoading = useMobileBoltStore(
    (s) => s.setAppSpinnerLoading
  );
  const {
    colors: { error, primary, secondary },
    dark,
  } = useTheme();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof PatientScannerDocumentSchema>>({
    resolver: zodResolver(PatientScannerDocumentSchema),
  });
  const appAxios = useMobileBoltStore((s) => s.appAxios);
  const [scannedImage, setScannedImage] = useState<string[] | null>(null);

  const onSubmit: SubmitHandler<z.infer<typeof PatientScannerDocumentSchema>> =
    useCallback(
      async (d) => {
        if (!patient) return errorNotification();
        if (!scannedImage || scannedImage.length === 0)
          return noFileErrorNotification();
        setAppSpinnerLoading(true);
        const abortController = new AbortController();
        const { documentCollectionDate, documentCollectionName } = d;
        const formData = new FormData();
        let length = 0;

        scannedImage.forEach((url, index) => {
          const file = {
            uri: url,
            type: mime.getType(url),
            name: `patientScannedDocument-${uuid()}-${index}.${
              mime.getType(url)?.split("/")[1]
            }`,
          };
          // @ts-expect-error
          formData.append(`file${index}`, file);
          length++;
        });
        formData.append("fileLength", length.toString());

        formData.append("patientId", patient.id);
        formData.append(
          "documentCollectionDate",
          documentCollectionDate.toISOString()
        );
        formData.append("documentCollectionName", documentCollectionName);
        try {
          const result = await appAxios.post(
            "http://bolt3.local/patientDocumentUploader",
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
            navigation.goBack();
          }
        } catch (error) {
          // console.error(error);
          setAppSpinnerLoading(false);
          errorNotification();
        }
      },
      [errorNotification, noFileErrorNotification, scannedImage, appAxios]
    );

  const scanDocument = async () => {
    // start the document scanner
    const { scannedImages } = await DocumentScanner.scanDocument();

    // get back an array with scanned image file paths
    if (scannedImages && scannedImages?.length > 0) {
      // set the img src, so we can view the first scanned image
      setScannedImage(scannedImages);
    }
  };

  const onPress = useCallback(() => {
    scanDocument();
  }, [scanDocument]);
  return (
    <ScrollView>
      {patient && (
        <View>
          <View>
            <PatientHeader patient={patient} />
          </View>
          <View className=" flex flex-col p-3">
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  className="my-2"
                  placeholder="Type de document"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="documentCollectionName"
            />
            {errors.documentCollectionName && (
              <Text style={{ color: error }}>
                {errors.documentCollectionName.message}
              </Text>
            )}

            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <View className="my-2">
                  <DatePickerInput
                    locale="fr"
                    label="Daté du:"
                    value={value}
                    onChange={onChange}
                    inputMode="start"
                  />
                </View>
              )}
              name="documentCollectionDate"
            />
            {errors.documentCollectionDate && (
              <Text style={{ color: error }}>
                {errors.documentCollectionDate.message}
              </Text>
            )}
          </View>
          <ScrollView horizontal className="flex flex-col gap-4 m-5">
            {scannedImage?.map((uri) => (
              <Image
                source={{
                  uri,
                }}
                className="h-40 w-20 rounded-2xl"
              />
            ))}
          </ScrollView>
          <View>
            <Button
              className="mx-12 mb-10"
              mode="elevated"
              icon="form-select"
              buttonColor={primary}
              textColor={dark ? "#000" : "#fff"}
              onPress={onPress}
            >
              Scanner
            </Button>
          </View>
          <View>
            <Button
              className="m-5"
              mode="elevated"
              icon="form-select"
              buttonColor={secondary}
              textColor={dark ? "#000" : "#fff"}
              onPress={handleSubmit(onSubmit)}
            >
              Valider
            </Button>
          </View>
        </View>
      )}
    </ScrollView>
  );
}

export default DocumentScannerPageComponent;
