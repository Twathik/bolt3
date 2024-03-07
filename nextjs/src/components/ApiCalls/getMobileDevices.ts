"use server";
import createWgClient from "@/lib/createClient";
import type { MobileDevicesMobileDevicesQueryResponseData } from "../wg-generated/models";

const getMobileDevices = async (): Promise<
  | MobileDevicesMobileDevicesQueryResponseData["mainDb_mobileDevices"]
  | undefined
> => {
  try {
    const client = await createWgClient();
    const getMobileDevices = await client.query({
      operationName: "mobileDevices/MobileDevicesQuery",
    });
    if (getMobileDevices.error) throw getMobileDevices.error;
    if (!getMobileDevices.data) throw Error();
    return getMobileDevices.data.mainDb_mobileDevices;
  } catch (error) {
    console.log({ error });
  }
};

export default getMobileDevices;
