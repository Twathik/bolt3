import { Font } from "@react-pdf/renderer";
import Georgia from "@/fonts/GeorgiaEstate-w15Mn.ttf";
import Arial from "@/fonts/Arial/ARIAL.ttf";
import ArialItalic from "@/fonts/Arial/ARIALLGTITL.ttf";
import AialBold from "@/fonts/Arial/arialceb.ttf";
import ArialBoldAndItalic from "@/fonts/Arial/ArialCEBoldItalic.ttf";
import Monospace from "@/fonts/MonoSpace/SpaceMono-Regular.ttf";
import MonospaceItalic from "@/fonts/MonoSpace/SpaceMono-Italic.ttf";
import MonospaceBold from "@/fonts/MonoSpace/SpaceMono-Bold.ttf";
import MonospaceBoldAndItalic from "@/fonts/MonoSpace/SpaceMono-BoldItalic.ttf";

export const registerFonts = () => {
  Font.register({
    family: "Georgia",
    format: "truetype",
    fonts: [{ src: Georgia }],
  });

  Font.register({
    family: "Arial",
    format: "truetype",
    fonts: [
      { src: Arial },
      { src: ArialItalic, fontStyle: "italic", fontWeight: "normal" },
      { src: AialBold, fontStyle: "normal", fontWeight: "bold" },
      { src: ArialBoldAndItalic, fontStyle: "italic", fontWeight: "bold" },
    ],
  });

  Font.register({
    family: "MonoSpace",
    format: "truetype",
    fonts: [
      { src: Monospace },
      { src: MonospaceItalic, fontStyle: "italic", fontWeight: "normal" },
      { src: MonospaceBold, fontStyle: "normal", fontWeight: "bold" },
      { src: MonospaceBoldAndItalic, fontStyle: "italic", fontWeight: "bold" },
    ],
  });
};
