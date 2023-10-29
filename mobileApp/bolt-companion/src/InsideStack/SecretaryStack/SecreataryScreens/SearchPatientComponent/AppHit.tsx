import { format, parseISO } from "date-fns";
import { View } from "react-native";

import AddPatientToList from "./HitComponents/AddPatientToList";
import OpenPatientFolder from "./HitComponents/OpenPatientFolder";
import { Text } from "react-native-paper";

function Hit({
  hit,
}: {
  hit: {
    lastName: string;
    firstName: string;
    ddn: string;
    sexe: "M" | "F";
    id: string;
  };
}) {
  return (
    <View className="h-12 flex flex-row">
      <View className="flex-1">
        <Text variant="bodyLarge">
          {hit.lastName} {hit.firstName}
        </Text>
        <Text variant="labelLarge" className=" text-slate-400">
          ddn: {format(parseISO(hit.ddn), "dd/MM/yyyy")}
        </Text>
      </View>
      <View className="flex m-2 flex-row gap-10">
        <View>
          <AddPatientToList id={hit.id} />
        </View>
        <View>
          <OpenPatientFolder id={hit.id} />
        </View>
      </View>
    </View>
  );
}

export default Hit;
