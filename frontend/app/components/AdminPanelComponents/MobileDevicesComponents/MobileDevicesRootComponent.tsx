import type { MobileDevicesMobileDevicesQueryResponseData } from "@/components/generated/models";
import { Alert, AlertDescription, AlertTitle } from "@/ui/components/ui/alert";
import { FaExclamationTriangle } from "react-icons/fa";
import MobileDevicesIndex from "./MobileDevicesIndex";
import { useBoltStore } from "@/stores/boltStore";
import { useEffect } from "react";

function MobileDevicesRootComponent({
  data,
}: {
  data: MobileDevicesMobileDevicesQueryResponseData["mainDb_mobileDevices"];
}) {
  const setMobileDevices = useBoltStore((store) => store.setMobileDevices);

  useEffect(() => {
    setMobileDevices(data);
  }, [data, setMobileDevices]);
  return data ? (
    <MobileDevicesIndex />
  ) : (
    <div className="w-1/2 mx-auto my-10">
      <Alert variant="destructive">
        <span className="h-4 w-4">
          <FaExclamationTriangle />
        </span>
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Une erreur est survenue, la liste des appareils mobiles n'a pa pu être
          réccupéré
        </AlertDescription>
      </Alert>
    </div>
  );
}

export default MobileDevicesRootComponent;
