import * as SecureStore from "expo-secure-store";

export async function saveToSecureStore(key: string, value: any) {
  await SecureStore.setItemAsync(key, value);
}

export async function getValueFromSecureStore(
  key: string
): Promise<any | null> {
  let result = await SecureStore.getItemAsync(key);
  if (result) {
    return result;
  } else {
    return null;
  }
}
