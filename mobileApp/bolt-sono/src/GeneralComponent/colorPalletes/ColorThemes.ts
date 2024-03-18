import {
  adaptNavigationTheme,
  MD3LightTheme,
  MD3DarkTheme,
} from "react-native-paper";
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from "@react-navigation/native";

import merge from "deepmerge";
import { ThemeProp } from "react-native-paper/lib/typescript/types";

import { darkPinkColors, lightPinkColors } from "./Pink";

const { LightTheme, DarkTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
});

export const CombinedDefaultTheme = merge(MD3LightTheme, LightTheme);
export const CombinedDarkTheme = merge(MD3DarkTheme, DarkTheme);

export const CombinedDefaultSecretaryTheme = {
  ...CombinedDefaultTheme,
  ...lightPinkColors,
};

export const CombinedDarkSecretaryTheme = {
  ...CombinedDarkTheme,
  ...darkPinkColors,
};

export const generateTheme = ({
  isDarkTheme,
  mobileDeviceType,
}: {
  isDarkTheme: boolean;
  mobileDeviceType: "DOCTOR" | "SECRETARY";
}): ThemeProp => {
  return mobileDeviceType === "SECRETARY"
    ? isDarkTheme
      ? CombinedDarkSecretaryTheme
      : CombinedDefaultSecretaryTheme
    : isDarkTheme
    ? CombinedDarkTheme
    : CombinedDefaultTheme;
};
