/* eslint-disable jsx-a11y/alt-text */
import { Document, Image, PDFViewer, Page, View } from "@react-pdf/renderer";
import React from "react";
import type { TDescendant } from "@udecode/plate-common";
import BarCode from "./BarCode";
import PdfConverter from "./pdfConverter/PdfConverter";
import { registerFonts } from "@/components/GeneralComponents/PDFcomponent/pdfConverter/registerFonts";
import type { PageSize } from "@react-pdf/types";
import { useBoltStore } from "@/stores/boltStore";
import type {
  FormattedDocumentTemplate,
  RawDocumentSettingsInterface,
} from "@/lib/utils/getDocumentSettings";

registerFonts();

function PdfComponent({
  content: { clinicalEventContent, settings },
  size,
  height = "92vh",
  width = "95vw",
}: {
  content: {
    clinicalEventContent: TDescendant[];
    settings: FormattedDocumentTemplate;
  };
  size: PageSize;
  width?: string;
  height?: string;
}) {
  const patient = useBoltStore((s) => s.patient);

  const urls: RawDocumentSettingsInterface["urls"] = settings
    ? settings.urls
    : {
        evenUrl: "/Templates/cardiologist-template-1-with-header.jpg",
        oddUrl: "/Templates/cardiologist-template-1-no-header.jpg",
      };
  const { paddingBottom, paddingLeft, paddingRight, paddingTop } =
    settings.paddings;

  return (
    <PDFViewer
      style={{
        width,
        height,
        alignSelf: "center",
      }}
    >
      <Document
        style={{ marginBottom: 10 }}
        title="test title"
        subject="test subject"
        creator="Admin"
        author="Tak"
        producer="Bolt"
      >
        <Page
          size={size}
          style={{
            paddingBottom,
            paddingLeft,
            paddingRight,
            paddingTop,
          }}
        >
          <View
            fixed
            style={{
              position: "absolute",
              minWidth: "100%",
              minHeight: "100%",
              display: "flex",
              height: "100vh",
              width: "100vw",
            }}
            render={({ pageNumber }) => {
              const odd = pageNumber % 2;
              return (
                <Image
                  src={odd === 0 ? urls.oddUrl : urls.evenUrl}
                  style={{
                    position: "absolute",
                    minWidth: "100%",
                    minHeight: "100%",
                    display: "flex",
                    height: "100vh",
                    width: "100vw",
                  }}
                />
              );
            }}
          />

          {clinicalEventContent && (
            <PdfConverter
              content={clinicalEventContent}
              size={size}
              patient={patient}
            />
          )}

          <View
            fixed
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              position: "absolute",
              bottom: 15,
              left: 10,
              width: "100vw",
            }}
          >
            <BarCode
              value={
                (clinicalEventContent[0]?.eventId as string) ??
                "no-id-for-this-document"
              }
            />
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}

export default PdfComponent;
