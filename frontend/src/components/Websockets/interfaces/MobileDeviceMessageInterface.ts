import type { MobileDevicesMobileDevicesQueryResponseData } from "@/components/wg-generated/models";
import type { RootMessageInterface } from "./MessageTypesInterface";

type MobileDeviceMessagePayloadOperationType = "update" | "create" | "delete";

interface RootMobileDeviceMessagePayload {
  operation: MobileDeviceMessagePayloadOperationType;
}

interface MobileDeviceUpdateMessagePayload
  extends RootMobileDeviceMessagePayload {
  mobileDevice: MobileDevicesMobileDevicesQueryResponseData["mainDb_mobileDevices"][0];
}

type MobileDeviceMessagePayload = MobileDeviceUpdateMessagePayload;

export interface MobileDeviceMessageInterface extends RootMessageInterface {
  type: "mobileDevice";
  payload: MobileDeviceMessagePayload;
}
