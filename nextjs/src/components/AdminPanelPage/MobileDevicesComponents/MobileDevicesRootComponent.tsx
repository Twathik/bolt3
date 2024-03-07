/* eslint-disable react/no-unescaped-entities */
"use client";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { FaExclamationTriangle } from "react-icons/fa";
import MobileDevicesIndex from "./MobileDevicesIndex";
import { useBoltStore } from "@/stores/boltStore";
import { useEffect } from "react";
import type { MobileDevicesMobileDevicesQueryResponseData } from "@/components/wg-generated/models";

function MobileDevicesRootComponent({
  data,
}: {
  data:
    | MobileDevicesMobileDevicesQueryResponseData["mainDb_mobileDevices"]
    | undefined;
}) {
  const setMobileDevices = useBoltStore((store) => store.setMobileDevices);

  useEffect(() => {
    if (data) setMobileDevices(data);
  }, [data, setMobileDevices]);
  return data ? (
    <MobileDevicesIndex />
  ) : (
    <div className="w-1/2 mx-auto my-10">
      <Alert variant="destructive">
        <AlertTitle className="flex flex-row gap-3 items-end">
          <div className="text-xl">
            <FaExclamationTriangle />
          </div>
          <div>Error</div>
        </AlertTitle>
        <AlertDescription>
          Une erreur est survenue, la liste des appareils mobiles n'a pa pu être
          réccupéré
        </AlertDescription>
      </Alert>
    </div>
  );
}

export default MobileDevicesRootComponent;
