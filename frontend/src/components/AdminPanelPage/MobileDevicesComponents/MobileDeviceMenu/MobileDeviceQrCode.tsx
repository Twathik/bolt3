import { QRCodeSVG } from "qrcode.react";

function MobileDeviceQrCode({ token }: { token: string }) {
  return (
    <div className="justify center flex flex-col items-center gap-5">
      <QRCodeSVG value={token} />
      {token}
    </div>
  );
}

export default MobileDeviceQrCode;
