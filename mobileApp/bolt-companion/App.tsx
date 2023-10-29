import "react-native-get-random-values";
import { useEffect } from "react";
import { StyleSheet } from "react-native";
import {
  getValueFromSecureStore,
  saveToSecureStore,
} from "./lib/stores/secureStore";
import { v4 as uuidv4 } from "uuid";
import useWundergraphStore from "./lib/stores/wundergraphStore";
import useSpinnerStore from "./lib/stores/spinnerStore";
import { AlertNotificationRoot } from "react-native-alert-notification";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import InsideStack from "./src/InsideStack/InsideStack";
import LoginPage from "./src/loginPage/LoginPage";
import { appUser } from "./lib/types/appUserInterface";
import { PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import Spinner from "react-native-loading-spinner-overlay";
import useThemeStore from "./lib/stores/themeStore";
import { generateTheme } from "./src/GeneralComponent/colorPalletes/ColorThemes";
import { fr, registerTranslation } from "react-native-paper-dates";
registerTranslation("fr", fr);

const url = `http://bolt3.local/api/user`;
const Stack = createNativeStackNavigator();

export default function App() {
  const { setAuthToken, setUuid, authToken, setUser, user, appAxios } =
    useWundergraphStore();
  const { appSpinnerLoading, setAppSpinnerLoading } = useSpinnerStore();
  const { isDarkTheme, setDarkTheme } = useThemeStore();

  useEffect(() => {
    const getTokens = async () => {
      setAppSpinnerLoading(true);
      let uuid = await getValueFromSecureStore("bolt3_uuid");
      const authToken = await getValueFromSecureStore("bolt3_authToken");
      const savedTheme = await getValueFromSecureStore("bolt3_theme");

      if (savedTheme) {
        setDarkTheme(savedTheme === "dark");
      }

      if (uuid === null) {
        uuid = uuidv4();
        await saveToSecureStore("bolt3_uuid", uuid);
      }
      setUuid(uuid);
      if (authToken) {
        setAuthToken(authToken);
      }
      setAppSpinnerLoading(false);
    };
    getTokens().catch(console.error);
  }, []);

  useEffect(() => {
    const abortController = new AbortController();

    if (authToken) {
      const fetchUsers = async () => {
        try {
          const response = await appAxios.get(url, {
            signal: abortController.signal,
            headers: { Authorization: authToken },
          });

          if (response.status === 200) {
            setUser(response.data.user as appUser);
          } else {
            throw new Error("Failed to fetch user");
          }
          setAppSpinnerLoading(false);
        } catch (error) {
          // console.error(error);
          if (abortController.signal.aborted) {
            console.log("aborted");
          }
          setAppSpinnerLoading(false);
        }
      };
      fetchUsers();
    }

    return () => abortController.abort("Data fetching cancelled");
  }, [authToken]);

  return (
    <PaperProvider
      theme={generateTheme({
        isDarkTheme,
        mobileDeviceType: user?.mobileDeviceType ?? "DOCTOR",
      })}>
      <Spinner
        visible={appSpinnerLoading}
        textContent={"Chargement en cours"}
        textStyle={styles.spinnerTextStyle}
      />

      <AlertNotificationRoot>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            {user ? (
              <Stack.Screen
                name="InsideStack"
                options={{ headerShown: false }}
                component={InsideStack}
              />
            ) : (
              <Stack.Screen
                name="Login"
                options={{ title: "Se connecter" }}
                component={LoginPage}
              />
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </AlertNotificationRoot>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  spinnerTextStyle: {
    color: "white",
  },
});
