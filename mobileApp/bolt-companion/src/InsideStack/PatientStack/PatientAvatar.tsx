import { ConsultationPatient } from "@/lib/stores/mobileBoltStoresType";

import React, { useCallback, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Avatar, Button, Modal, Portal, useTheme } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useMobileBoltStore } from "@/lib/stores/mobileBoltStore";
import mime from "mime";
import { Image, ImageSource } from "expo-image";

const FormData = global.FormData;

function PatientAvatar({ patient }: { patient: ConsultationPatient }) {
  const {
    colors: { primary, secondary, error },
  } = useTheme();
  const [image, setImage] = useState<string | null>(
    `http://bolt3.local/app-storage/patient-avatar-${patient.id}.jpeg`
  );
  const authToken = useMobileBoltStore((s) => s.authToken);

  const defaultAvatar =
    patient.sexe === "F"
      ? require("@/GeneralComponent/images/avatar-woman.png")
      : require("@/GeneralComponent/images/avatar-man.png");
  const avatar: ImageSource =
    image !== null
      ? { uri: image, headers: { Authorization: authToken } }
      : defaultAvatar;
  const fallBackImage = useCallback(() => {
    setImage(null);
  }, []);
  const appAxios = useMobileBoltStore((s) => s.appAxios);

  const [visible, setVisible] = useState(false);
  const showModal = useCallback(() => setVisible(true), []);
  const hideModal = useCallback(() => setVisible(false), []);
  const uploadCameraImage = useCallback(async () => {
    try {
      await ImagePicker.requestCameraPermissionsAsync();
      const result = await ImagePicker.launchCameraAsync({
        cameraType: ImagePicker.CameraType.back,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });
      if (!result.canceled) {
        await saveImage(result.assets[0]);
      }
    } catch ({ message }: any) {
      hideModal();
    }
  }, []);

  const uploadGalleryImage = useCallback(async () => {
    try {
      await ImagePicker.requestMediaLibraryPermissionsAsync();
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });
      if (!result.canceled) {
        await saveImage(result.assets[0]);
      }
    } catch ({ message }: any) {
      hideModal();
    }
  }, []);

  const removeImage = useCallback(async () => {
    try {
      await saveImage(null);
      hideModal();
    } catch (error) {
      hideModal();
    }
  }, []);

  const saveImage = useCallback(
    async (image: ImagePicker.ImagePickerAsset | null) => {
      try {
        setImage(image?.uri ?? null);
        if (image) await sendToBackend(image);
        hideModal();
      } catch (error) {}
    },
    []
  );

  const sendToBackend = useCallback(
    async (image: ImagePicker.ImagePickerAsset) => {
      const abortController = new AbortController();

      try {
        const formData = new FormData();

        // @ts-ignore
        formData.append("file", {
          uri: image.uri,
          type: mime.getType(image.uri),
          name: `patient-avatar-${patient.id}.${
            mime.getType(image.uri)?.split("/")[1]
          }`,
        });
        formData.append("patientId", patient.id);

        const result = await appAxios.post(
          "http://bolt3.local/uploader",
          formData,
          {
            signal: abortController.signal,
            headers: {
              "Content-Type": "multipart/form-data",
            },
            transformRequest: () => formData,
          }
        );
      } catch (error) {
        //@ts-ignore

        if (abortController.signal.aborted) {
          console.log("aborted");
        }
        // console.error(error);
      }
    },
    []
  );
  return (
    <View>
      <Portal>
        <Modal
          visible={visible}
          dismissable
          onDismiss={hideModal}
          contentContainerStyle={{
            backgroundColor: "white",
            padding: 20,
            marginLeft: 10,
            marginRight: 10,
            borderRadius: 20,
          }}
          dismissableBackButton
        >
          <View className="flex flex-row justify-between">
            <Button
              className="h-12 flex flex-row justify-center items-center"
              style={{ backgroundColor: primary }}
              onPress={uploadCameraImage}
            >
              <AntDesign name="camera" size={24} color="white" />
            </Button>
            <Button
              className="h-12 flex flex-row justify-center items-center"
              style={{ backgroundColor: secondary }}
              onPress={uploadGalleryImage}
            >
              <Fontisto name="picture" size={20} color="white" />
            </Button>
            <Button
              className="h-12 flex flex-row justify-center items-center"
              style={{ backgroundColor: error }}
              onPress={removeImage}
            >
              <AntDesign name="delete" size={24} color="white" />
            </Button>
          </View>
        </Modal>
      </Portal>
      <Image
        source={avatar}
        className="h-64 w-64 rounded-2xl"
        onError={fallBackImage}
        cachePolicy="none"
      />
      <TouchableOpacity
        onPress={showModal}
        className="absolute bottom-0 left-2/3"
      >
        <Avatar.Icon size={60} icon="camera" />
      </TouchableOpacity>
    </View>
  );
}

export default PatientAvatar;
