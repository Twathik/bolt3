import MobileDevice from "@/components/AdminPanelComponents/MobileDevicesComponents/MobileDevice";
import CreateMobileDevice from "@/components/AdminPanelComponents/MobileDevicesComponents/CreateMobileDevice";
import { useBoltStore } from "@/stores/boltStore";

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
        {mobileDevices?.map((mobileDevice) => (
          <MobileDevice key={mobileDevice.id} mobileDevice={mobileDevice} />
        ))}
      </ul>
    </>
  );
}

export default MobileDevicesIndex;
