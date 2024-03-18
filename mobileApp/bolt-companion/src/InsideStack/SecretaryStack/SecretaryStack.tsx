import React, { useEffect } from "react";

import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SearchPatientScreen from "./SecreataryScreens/SearchPatientScreen";
import AddPatientFormScreen from "./SecreataryScreens/AddPatientFormScreen";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
const Tab = createMaterialBottomTabNavigator();

function SecretaryStack() {
  return (
    <Tab.Navigator
      initialRouteName="Search"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          if (route.name === "Search") {
            return (
              <MaterialIcons
                name="person-search"
                size={24}
                color={focused ? "#92400e" : "#334155"}
              />
            );
          } else if (route.name === "Form") {
            return (
              <AntDesign
                name="form"
                size={24}
                color={focused ? "#92400e" : "#334155"}
              />
            );
          }

          // You can return any component that you like here!
        },

        tabBarShowLabel: false,
      })}>
      <Tab.Screen
        name="Search"
        options={{ title: "Blot3 Search" }}
        component={SearchPatientScreen}
      />
      <Tab.Screen name="Form" component={AddPatientFormScreen} />
    </Tab.Navigator>
  );
}

export default SecretaryStack;
