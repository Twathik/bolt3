import React from "react";
import QRCode from "react-qr-code";

function MobileDeviceQrCode({ token }: { token: string }) {
  return <QRCode value={token} />;
}

export default MobileDeviceQrCode;
