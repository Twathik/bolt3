import MobileDevice from "@/components/AdminPanelComponents/MobileDevicesComponents/MobileDevice";
import CreateMobileDevice from "@/components/AdminPanelComponents/MobileDevicesComponents/CreateMobileDevice";
import type { MobileDevicesMobileDevicesQueryResponseData } from "@/components/generated/models";
import { Alert, AlertDescription, AlertTitle } from "@/ui/components/ui/alert";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

function MobileDevicesIndex({
  data,
}: {
  data: MobileDevicesMobileDevicesQueryResponseData["mainDb_mobileDevices"];
}) {
  return (
    <>
      <div className="bloc flex flex-row">
        <div className="flex-1"></div>
        <div className="flex">
          <CreateMobileDevice />
        </div>
      </div>
      <ul className="">
        {data ? (
          data?.map((mobileDevice) => (
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
