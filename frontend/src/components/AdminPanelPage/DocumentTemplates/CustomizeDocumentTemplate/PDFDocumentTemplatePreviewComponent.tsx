"use client";

import PdfComponent from "@/components/GeneralComponents/PDFcomponent/PdfComponent";
import {
  getDocumentPaddings,
  type FormattedDocumentTemplate,
  type RawDocumentSettingsInterface,
  DefaultDocumentTemplatesSettings,
} from "@/lib/generalUtils/getDocumentSettings";
import type { PageSize } from "@react-pdf/types";
import React, { useMemo } from "react";
import { LoremIpsumData } from "./loremIpsum";

function PDFDocumentTemplatePreviewComponent({
  rawSettings,
  size,
}: {
  rawSettings: RawDocumentSettingsInterface;
  size: PageSize;
}) {
  const formattedSettings: FormattedDocumentTemplate = useMemo(
    () =>
      rawSettings
        ? {
            paddings: getDocumentPaddings({
              size,
              settings: rawSettings,
            }),
            urls: rawSettings.urls,
          }
        : DefaultDocumentTemplatesSettings({ size }),
    [rawSettings, size]
  );

  return (
    <PdfComponent
      content={{
        clinicalEventContent: LoremIpsumData,
        settings: formattedSettings,
      }}
      size={size}
      width="70vw"
    />
  );
}

export default PDFDocumentTemplatePreviewComponent;
