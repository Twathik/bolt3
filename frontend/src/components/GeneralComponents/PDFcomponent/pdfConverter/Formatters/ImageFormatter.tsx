import { Image as PImage, Text, View } from "@react-pdf/renderer";

import type { PdfCheckerProps } from "../PdfCheckerInterface";

const ImageFormatter = ({ content, parentStyle }: PdfCheckerProps) => {
  console.log({ content });

  return (
    <View
      style={{
        ...parentStyle,
        textAlign: "center",
        display: "flex",
        flexDirection: "row",
        minHeight: content.height as number,
      }}
    >
      <Text style={{ flexGrow: 1 }} />
      <View>
        <PImage
          style={{
            marginHorizontal: "10%",
            width: content.width as number,
            height: content.height as number,
          }}
          src={content.url as string}
        />
        {content.caption ? (
          <View
            style={{
              marginTop: 5,
              textAlign: "center",
              display: "flex",
              flexDirection: "row",
              minHeight: 20,
            }}
          >
            <Text style={{ flexGrow: 1 }} />
            <Text>{(content.caption as any)[0].text as string}</Text>
            <Text style={{ flexGrow: 1 }} />
          </View>
        ) : (
          <View />
        )}
      </View>

      <Text style={{ flexGrow: 1 }} />
    </View>
  );
};

export default ImageFormatter;
