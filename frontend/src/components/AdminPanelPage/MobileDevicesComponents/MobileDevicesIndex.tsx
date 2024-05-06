import MobileDevice from "@/components/AdminPanelPage/MobileDevicesComponents/MobileDevice";
import CreateMobileDevice from "@/components/AdminPanelPage/MobileDevicesComponents/CreateMobileDevice";
import { useBoltStore } from "@/stores/boltStore";
import _ from "lodash";

function MobileDevicesIndex() {
  const mobileDevices = useBoltStore((store) => store.mobileDevices);
  return (
    <>
      <div className="bloc flex flex-row">
        <div className="flex-1"></div>
        <div className="flex">
          <CreateMobileDevice />
        </div>
      </div>
      <ul className="">
        {_.uniqBy(mobileDevices, "id")?.map((mobileDevice) => (
          <MobileDevice key={mobileDevice.id} mobileDevice={mobileDevice} />
        ))}
      </ul>
    </>
  );
}

export default MobileDevicesIndex;
