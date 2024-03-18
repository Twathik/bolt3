import React, { useCallback, useEffect, useState } from "react";
import { Button, TouchableOpacity, View } from "react-native";
import { BarCodeScannedCallback, BarCodeScanner } from "expo-barcode-scanner";
import useWundergraphStore from "../../lib/stores/wundergraphStore";
import useSpinnerStore from "../../lib/stores/spinnerStore";
import { ALERT_TYPE, Dialog } from "react-native-alert-notification";

import {
  MobileDevicesAddMobileDeviceMutationResponse,
  MobileDevicesRegisterOneMobileDeviceInput,
} from "../../generated/models";
import { saveToSecureStore } from "../../lib/stores/secureStore";
import { Text } from "react-native-paper";

function LoginPage() {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState(true);
  const { uuid, setAuthToken, appAxios } = useWundergraphStore();
  const { setAppSpinnerLoading } = useSpinnerStore();

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

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned: BarCodeScannedCallback = useCallback(
    async ({ data: accessToken }) => {
      setAppSpinnerLoading(true);
      try {
        const formData: MobileDevicesRegisterOneMobileDeviceInput = {
          accessToken,
          uuid: uuid ?? "",
        };
        setScanned(true);
        const result =
          await appAxios.post<MobileDevicesAddMobileDeviceMutationResponse>(
            "/operations/mobileDevices/registerOneMobileDevice",
            formData
          );

        if (result.status !== 200) {
          errorNotification();
          setAppSpinnerLoading(false);
        }
        const authToken = `Bearer ${uuid}##_##${accessToken}`;
        saveToSecureStore("bolt3_authToken", authToken);
        setAuthToken(authToken);
        setAppSpinnerLoading(false);
      } catch (error) {
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
    ]
  );

  if (hasPermission === null) {
    return (
      <View className=" h-full w-full flex items-center justify-center">
        <Text>Initialization ...</Text>
      </View>
    );
  }
  if (hasPermission === false) {
    return (
      <View>
        <Text>
          Vous devez autoriser l'utilisation de la camera pour cette application
        </Text>
        <Button
          title="Demander l'autorization"
          onPress={async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === "granted");
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
      <View
        className="border-slate-600 border-2 border-dashed p-5 flex w-3/4 h-1/2 
       rounded-2xl mt-10">
        {!scanned && (
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            className="h-full w-full"
          />
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
