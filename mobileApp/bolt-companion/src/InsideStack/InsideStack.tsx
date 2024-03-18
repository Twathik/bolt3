import React, { useEffect } from "react";
import { Button, Text } from "react-native";
import useSpinnerStore from "../../lib/stores/spinnerStore";
import useWundergraphStore from "../../lib/stores/wundergraphStore";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DoctorStack from "./DoctorStack/DoctorStack";
import SecretaryStack from "./SecretaryStack/SecretaryStack";

import AppHeader from "../GeneralComponent/AppHeader/AppHeader";

const Stack = createNativeStackNavigator();
function InsideStack() {
  const { setAppSpinnerLoading } = useSpinnerStore();
  const { user } = useWundergraphStore();

  useEffect(() => {
    setAppSpinnerLoading(false);
  }, []);
  return user?.mobileDeviceType == "DOCTOR" ? (
    <Stack.Navigator>
      <Stack.Screen
        name="Doctor"
        options={{
          title: "Bolt3 companion",
          header: (props) => <AppHeader {...props} />,
        }}
        component={DoctorStack}
      />
    </Stack.Navigator>
  ) : (
    <Stack.Navigator>
      <Stack.Screen
        name="Secretary"
        options={{
          title: "Bolt3 secretary",
          header: (props) => <AppHeader {...props} />,
        }}
        component={SecretaryStack}
      />
    </Stack.Navigator>
  );
}

export default InsideStack;
