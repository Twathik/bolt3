import type { PageSize } from "@react-pdf/types";

export interface DocumentTemplatesUrls {
  oddUrl: string;
  evenUrl: string;
}

export interface RawDocumentSettingsInterface {
  paddings: {
    A4paddingTop: number;
    A4paddingBottom: number;
    A4paddingLeft: number;
    A4paddingRight: number;
    A5paddingTop: number;
    A5paddingBottom: number;
    A5paddingLeft: number;
    A5paddingRight: number;
  };
  urls: DocumentTemplatesUrls;
}

export interface FormattedDocumentTemplate {
  paddings: {
    paddingBottom: string;
    paddingLeft: string;
    paddingRight: string;
    paddingTop: string;
  };
  urls: DocumentTemplatesUrls;
}

export interface DocumentPaddings {
  paddingBottom: string;
  paddingLeft: string;
  paddingRight: string;
  paddingTop: string;
}

export const getDocumentPaddings = ({
  settings,
  size,
}: {
  settings?: RawDocumentSettingsInterface | null;
  size: PageSize;
}): DocumentPaddings => {
  if (!settings)
    return {
      paddingBottom: `15mm`,
      paddingLeft: `15mm`,
      paddingRight: `15mm`,
      paddingTop: `20mm`,
    };

  const {
    A4paddingTop,
    A4paddingBottom,
    A4paddingLeft,
    A4paddingRight,
    A5paddingTop,
    A5paddingBottom,
    A5paddingLeft,
    A5paddingRight,
  } = settings.paddings;
  if (size === "A5")
    return {
      paddingBottom: `${A5paddingBottom}mm`,
      paddingLeft: `${A5paddingLeft}mm`,
      paddingRight: `${A5paddingRight}mm`,
      paddingTop: `${A5paddingTop}mm`,
    };
  return {
    paddingBottom: `${A4paddingBottom}mm`,
    paddingLeft: `${A4paddingLeft}mm`,
    paddingRight: `${A4paddingRight}mm`,
    paddingTop: `${A4paddingTop}mm`,
  };
};

export const DefaultDocumentTemplatesSettings = ({
  size,
}: {
  size: PageSize;
}): FormattedDocumentTemplate => ({
  paddings: getDocumentPaddings({ size, settings: null }),
  urls: {
    evenUrl: "/Templates/cardiologist-template-1-with-header.jpg",
    oddUrl: "/Templates/cardiologist-template-1-no-header.jpg",
  },
});
