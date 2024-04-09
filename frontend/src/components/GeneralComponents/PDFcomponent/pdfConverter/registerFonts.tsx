import { Font } from "@react-pdf/renderer";

export const registerFonts = () => {
  Font.register({
    family: "Georgia",
    format: "truetype",
    fonts: [{ src: "/fonts/GeorgiaEstate-w15Mn.ttf" }],
  });

  Font.register({
    family: "Arial",
    format: "truetype",
    fonts: [
      { src: "/fonts/Arial/ARIAL.ttf" },
      {
        src: "/fonts/Arial/ARIALLGTITL.ttf",
        fontStyle: "italic",
        fontWeight: "normal",
      },
      {
        src: "/fonts/Arial/arialceb.ttf",
        fontStyle: "normal",
        fontWeight: "bold",
      },
      {
        src: "/fonts/Arial/ArialCEBoldItalic.ttf",
        fontStyle: "italic",
        fontWeight: "bold",
      },
    ],
  });

  Font.register({
    family: "MonoSpace",
    format: "truetype",
    fonts: [
      { src: "/fonts/MonoSpace/SpaceMono-Regular.ttf" },
      {
        src: "/fonts/MonoSpace/SpaceMono-Italic.ttf",
        fontStyle: "italic",
        fontWeight: "normal",
      },
      {
        src: "/fonts/MonoSpace/SpaceMono-Bold.ttf",
        fontStyle: "normal",
        fontWeight: "bold",
      },
      {
        src: "/fonts/MonoSpace/SpaceMono-BoldItalic.ttf",
        fontStyle: "italic",
        fontWeight: "bold",
      },
    ],
  });
};
