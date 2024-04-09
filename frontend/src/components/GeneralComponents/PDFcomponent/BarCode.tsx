/* eslint-disable jsx-a11y/alt-text */
import { Image, View } from "@react-pdf/renderer";
import { QRCodeSVG } from "qrcode.react";
import { useEffect, useState } from "react";
import * as canvg from "canvg";
import { renderToString } from "react-dom/server";

const svgToDataUri = async (svgString: string) => {
  try {
    const canvas: HTMLCanvasElement = document.createElement("canvas");
    const context = canvas.getContext("2d");
    if (context) {
      const v = canvg.Canvg.fromString(context, svgString.trim());
      await v.render();
      const dataUri = canvas.toDataURL("image/png");
      return dataUri;
    }
  } catch (error) {
    console.error("Error occured:", error);
    return "";
  }
};

function BarCode({ value }: { value: string }) {
  const [svgDataUri, setSvgDataUri] = useState<string>("");

  useEffect(() => {
    async function convertSvgToDataUri() {
      const svg = <QRCodeSVG value={value} />;

      const dataUri = await svgToDataUri(renderToString(svg));
      setSvgDataUri(dataUri || "");
    }
    convertSvgToDataUri();
  }, [value]);
  return (
    <View
      style={{
        width: 50,
      }}
    >
      {svgDataUri !== "" && (
        <Image style={{ width: 50, height: 50 }} src={svgDataUri} />
      )}
    </View>
  );
}

export default BarCode;
