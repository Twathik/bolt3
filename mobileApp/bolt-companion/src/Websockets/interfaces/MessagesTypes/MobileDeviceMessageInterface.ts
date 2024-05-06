import type { RootMessageInterface } from "../MessageTypesInterface";

type MobileDeviceMessagePayloadOperationType = "update" | "create" | "delete";

interface RootMobileDeviceMessagePayload {
  operation: MobileDeviceMessagePayloadOperationType;
}

interface MobileDeviceUpdateMessagePayload
  extends RootMobileDeviceMessagePayload {
  mobileDevice: {
    id: string;
    accessToken: string;
    connected: boolean;
    expireAt: string;
    mobileDeviceType: "DOCTOR" | "SECRETARY";
    uuid: string;
  };
}

type MobileDeviceMessagePayload = MobileDeviceUpdateMessagePayload;

export interface MobileDeviceMessageInterface extends RootMessageInterface {
  type: "mobileDevice";
  payload: MobileDeviceMessagePayload;
}
