import React, { useCallback } from "react";
import { useTheme, Appbar, Switch } from "react-native-paper";
import useThemeStore from "../../../lib/stores/themeStore";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "react-native";
import useWundergraphStore from "../../../lib/stores/wundergraphStore";
import { saveToSecureStore } from "../../../lib/stores/secureStore";
import AntDesign from "@expo/vector-icons/AntDesign";

const AppHeader = ({ options, back, navigation }: NativeStackHeaderProps) => {
  const theme = useTheme();
  const { setUser, setAuthToken } = useWundergraphStore();
  const { isDarkTheme, setDarkTheme } = useThemeStore();

  const logout = useCallback(async () => {
    await saveToSecureStore("authToken", "");
    setAuthToken("");
    setUser(null);
  }, []);

  const setTheme = useCallback(async () => {
    setDarkTheme(!isDarkTheme);
    await saveToSecureStore("bolt3_theme", !isDarkTheme ? "dark" : "light");
  }, [isDarkTheme]);

  return (
    <Appbar.Header
      theme={{
        colors: {
          primary: theme?.colors.surface,
        },
      }}>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={options.title} />
      <View className="flex flex-row gap-10 mr-5">
        <MaterialCommunityIcons
          name="theme-light-dark"
          size={24}
          color={isDarkTheme ? "white" : "black"}
          onPress={setTheme}
        />
        <AntDesign name="logout" onPress={logout} color="#666" size={24} />
      </View>
    </Appbar.Header>
  );
};

export default AppHeader;
