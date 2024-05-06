import React, { useCallback, useEffect, useState } from "react";
import { Button, TouchableOpacity, View } from "react-native";
import { ALERT_TYPE, Dialog } from "react-native-alert-notification";
import { Text } from "react-native-paper";
import { CameraType } from "expo-camera";
import {
  BarcodeScanningResult,
  CameraView,
  useCameraPermissions,
} from "expo-camera/next";
import { useMobileBoltStore } from "../lib/stores/mobileBoltStore";
import {
  MobileDevicesAddMobileDeviceMutationResponse,
  MobileDevicesRegisterOneMobileDeviceInput,
} from "@/generated/models";
import { saveToSecureStore } from "@/lib/stores/secureStore";

function LoginPage() {
  const [status, requestPermission] = useCameraPermissions();
  const [facing, setFacing] = useState<CameraType>(CameraType.back);
  const [scanned, setScanned] = useState(true);
  const uuid = useMobileBoltStore((s) => s.uuid);
  const setAuthToken = useMobileBoltStore((s) => s.setAuthToken);
  const appAxios = useMobileBoltStore((s) => s.appAxios);
  const setAppSpinnerLoading = useMobileBoltStore(
    (s) => s.setAppSpinnerLoading
  );

  const errorNotification = useCallback(
    () =>
      Dialog.show({
        type: ALERT_TYPE.DANGER,
        title: "Erreur",
        textBody: "L'authentification a echoué",
        button: "fermer",
      }),
    []
  );

  function toggleCameraFacing() {
    setFacing((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  const onBarCodeScanned = useCallback(
    async ({ data: accessToken }: BarcodeScanningResult) => {
      setAppSpinnerLoading(true);
      if (!uuid) throw Error("no uuid");

      try {
        const formData: MobileDevicesRegisterOneMobileDeviceInput = {
          accessToken,
          uuid: uuid ?? "",
        };
        setScanned(true);
        const authToken = `Bearer ${uuid}##_##${accessToken}`;
        const result =
          await appAxios.post<MobileDevicesAddMobileDeviceMutationResponse>(
            "/operations/mobileDevices/registerOneMobileDevice",
            formData,
            {
              headers: {
                Authorization: authToken,
              },
            }
          );

        if (result.status !== 200) {
          errorNotification();
          setAppSpinnerLoading(false);
        }

        saveToSecureStore("bolt3_authToken", authToken);
        setAuthToken(authToken);
        setAppSpinnerLoading(false);
      } catch (error) {
        console.log({ error });
        setAppSpinnerLoading(false);
        errorNotification();
      }
    },
    [
      setScanned,
      errorNotification,
      setAppSpinnerLoading,
      saveToSecureStore,
      setAuthToken,
      uuid,
    ]
  );

  if (!status) {
    return (
      <View className=" h-full w-full flex items-center justify-center">
        <Text>Initialization ...</Text>
      </View>
    );
  }
  if (status.expires !== "never" || !status.granted) {
    return (
      <View>
        <Text>
          Vous devez autoriser l'utilisation de la camera pour cette application
        </Text>

        <Button
          title="Demander l'autorization!"
          onPress={async () => {
            console.log("clicked");
            await requestPermission();
          }}
        />
      </View>
    );
  }

  return (
    <View className="bg-slate-300 h-full w-full flex justify-center items-center">
      <Text className="text-slate-800 text-center font-bold text-lg">
        Veuillez verifier que le serveur est accessible avant de tenter une
        reconexion
      </Text>
      <Text className="text-slate-800 text-center font-bold text-lg">
        Scanner le QR code d'authentification pour vous connecter à
        l'application
      </Text>
      <View className="border-slate-600 border-2 border-dashed p-5 w-3/4 min-h-[55vh] rounded-2xl mt-10">
        {!scanned && (
          <CameraView
            className="flex"
            facing={facing}
            onBarcodeScanned={onBarCodeScanned}
          >
            <View className="bg-transparent h-[50vh] rounded-2xl">
              <TouchableOpacity
                className="flex flex-col text-center items-center"
                onPress={toggleCameraFacing}
              >
                <Text className="text-2xl font-bold text-white m-auto">
                  Flip Camera
                </Text>
              </TouchableOpacity>
            </View>
          </CameraView>
        )}
      </View>

      {scanned && (
        <TouchableOpacity onPress={() => setScanned(false)}>
          <View className="flex w-full">
            <Text className="bg-slate-500 w-1/2 m-5 p-5 text-white rounded-md">
              Scanner le QR code
            </Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
}

export default LoginPage;
