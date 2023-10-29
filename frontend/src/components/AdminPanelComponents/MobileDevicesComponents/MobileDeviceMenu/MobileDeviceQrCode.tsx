import React from "react";
import QRCode from "react-qr-code";

function MobileDeviceQrCode({ token }: { token: string }) {
  return (
    <div className="justify center flex flex-col items-center gap-5">
      <QRCode value={token} />
      {token}
    </div>
  );
}

export default MobileDeviceQrCode;
