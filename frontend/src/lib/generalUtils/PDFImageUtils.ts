import type { PageSize } from "@react-pdf/types";
import type { TElement } from "@udecode/plate-common";

export type PngBlobType = {
  blob: Blob;
  width: number;
  height: number;
};

export const pageSize = (size: PageSize, paddingLeft?: number) => {
  if (size === "A5") return 560 - (paddingLeft ? paddingLeft * 3.77 : 0);
  return 794 /* - (paddingLeft ? paddingLeft * 3.77 : 0) */;
};

function dataURItoBlob(dataURI: string) {
  var byteString = atob(dataURI.split(",")[1]);
  var mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
  var ab = new ArrayBuffer(byteString.length);
  var ia = new Uint8Array(ab);
  for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  var blob = new Blob([ab], { type: mimeString });
  return blob;
}

export const convertBlob = ({
  blob,
  callback,
  content,
  type,
  size,
  paddingLeft,
}: {
  content: TElement;
  size: PageSize;
  blob: Blob | MediaSource;
  type: string;
  callback: { (pngBlob: PngBlobType): void };
  paddingLeft?: number;
}) => {
  return new Promise((resolve) => {
    let canvas = document.createElement("canvas");
    canvas.style.display = "none";
    let ctx = canvas.getContext("2d");
    let image = new Image();
    image.src = URL.createObjectURL(blob);
    image.onload = function () {
      canvas.width = image.width;
      canvas.height = image.height;
      ctx?.drawImage(image, 0, 0);
      let result = dataURItoBlob(canvas.toDataURL(type));
      const width =
        ((content.width as number) * pageSize(size, paddingLeft)) / 1034;
      const height = (image.height * width) / image.width;
      if (callback)
        callback({
          blob: result,
          width,
          height,
        });
      else
        resolve({
          blob: result,
          width,
          height,
        });
    };
  });
};
