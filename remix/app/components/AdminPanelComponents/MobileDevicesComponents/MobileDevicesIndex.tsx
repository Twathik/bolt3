import MobileDevice from "@/components/AdminPanelComponents/MobileDevicesComponents/MobileDevice";
import CreateMobileDevice from "@/components/AdminPanelComponents/MobileDevicesComponents/CreateMobileDevice";
import { useSubscription } from "@/lib/wundergraph";
import { useToast } from "@/ui/components/ui/use-toast";
import type { MobileDevicesMobileDevicesQueryResponseData } from "@/components/generated/models";
import { useEffect, useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/ui/components/ui/alert";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

function MobileDevicesIndex({
  data,
}: {
  data: MobileDevicesMobileDevicesQueryResponseData["mainDb_mobileDevices"];
}) {
  const [mobileDevices, setMobileDevices] =
    useState<
      MobileDevicesMobileDevicesQueryResponseData["mainDb_mobileDevices"]
    >(data);

  const { data: subscribedData, error: subscriptionError } = useSubscription({
    operationName: "mobileDevices/getAllDevicesSubscription",
  });

  const { toast } = useToast();
  useEffect(() => {
    if (subscribedData)
      setMobileDevices(subscribedData.mainDb_getMobileDevicesList);
  }, [subscribedData]);

  if (subscriptionError) {
    toast({
      variant: "destructive",
      title: "Une erreur est survenue",
      description:
        "La liste des applications mobiles actives n'a pas pue être réccupérée",
    });
    return (
      <div className=" flex h-96 flex-row items-center justify-center align-middle"></div>
    );
  }

  return (
    <>
      <div className="bloc flex flex-row">
        <div className="flex-1"></div>
        <div className="flex">
          <CreateMobileDevice />
        </div>
      </div>
      <ul className="">
        {mobileDevices ? (
          mobileDevices?.map((mobileDevice) => (
            <MobileDevice key={mobileDevice.id} mobileDevice={mobileDevice} />
          ))
        ) : (
          <div className="w-1/2 mx-auto my-10">
            <Alert variant="destructive">
              <ExclamationTriangleIcon className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                Une erreur est survenue, la liste des appareils mobiles n'a pa
                pu être réccupéré
              </AlertDescription>
            </Alert>
          </div>
        )}
      </ul>
    </>
  );
}

export default MobileDevicesIndex;
