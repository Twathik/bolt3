import { View } from "react-native";
import { Image } from "expo-image";
import AddPatientToList from "./HitComponents/AddPatientToList";
import OpenPatientFolder from "./HitComponents/OpenPatientFolder";
import { Text } from "react-native-paper";
import { ConsultationPatient } from "@/lib/stores/mobileBoltStoresType";
import { useCallback, useState } from "react";
import { useMobileBoltStore } from "@/lib/stores/mobileBoltStore";
import ScanPatientDocuments from "./HitComponents/ScanDocuments";

function Hit({ hit }: { hit: ConsultationPatient }) {
  const authToken = useMobileBoltStore((s) => s.authToken);
  const [image, setImage] = useState<string | null>(
    `http://storage.bolt3.local/uploads/patient-avatar-${hit.id}.jpeg`
  );

  const defaultAvatar =
    hit.sexe === "F"
      ? require("@/GeneralComponent/images/avatar-woman.png")
      : require("@/GeneralComponent/images/avatar-man.png");
  const fallBackImage = useCallback((er: any) => {
    setImage(null);
  }, []);
  const avatar = image
    ? { uri: image, headers: { Authorization: authToken } }
    : defaultAvatar;

  return (
    <View className="h-12 flex flex-row">
      <View className="flex-1">
        <View className="flex flex-row gap-4 align-middle items-center">
          <Image
            source={avatar}
            className="h-14 w-14 rounded-2xl"
            onError={fallBackImage}
            cachePolicy="none"
          />

          <View>
            <Text variant="bodyLarge">
              {hit.lastName} {hit.firstName}
            </Text>
            <Text variant="labelLarge" className=" text-slate-400">
              ddn: {hit.ddn}
            </Text>
          </View>
        </View>
      </View>
      <View className="flex m-2 flex-row gap-4">
        <View>
          <AddPatientToList id={hit.id} />
        </View>
        <View>
          <ScanPatientDocuments patient={hit} />
        </View>
        <View>
          <OpenPatientFolder patient={hit} />
        </View>
      </View>
    </View>
  );
}

export default Hit;
