import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { useCallback, useEffect, useRef, useState } from "react";
import { Document, Image, PDFViewer, Page, View } from "@react-pdf/renderer";
import pdfConverter from "@/components/GeneralComponents/PDFconverter/pdfConverter";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/ui/components/ui/sheet";
import { tw } from "@/components/GeneralComponents/PDFconverter/mainPDFtheme";
import type {
  EditorState,
  SerializedEditorState,
  SerializedLexicalNode,
} from "lexical";
import { debounce } from "lodash-es";
import { registerFonts } from "@/fonts/registerFonts";
import entete from "./entete.png";
import piedDePage from "./piedPage.png";
import BarCode from "./BarCode";

registerFonts();

function PrescriptionToPDF() {
  const [editor] = useLexicalComposerContext();

  const [content, setContent] =
    useState<SerializedEditorState<SerializedLexicalNode> | null>(null);

  const updatePDF = useCallback((editorState: EditorState) => {
    console.log({ editorState: editorState.toJSON() });
    setContent(editorState.toJSON());
  }, []);
  const debouncedFunction = useRef(debounce(updatePDF, 5000));

  useEffect(() => {
    let isMounted = true;
    const unregister = editor.registerUpdateListener(({ editorState }) => {
      if (isMounted) {
        debouncedFunction.current(editorState);
      }
    });

    return () => {
      isMounted = false;
      unregister();
    };
  }, [editor]);

  return (
    <>
      <Sheet>
        <SheetTrigger>render PDF</SheetTrigger>
        <SheetContent side="bottom" className="h-screen">
          <SheetHeader>
            <SheetTitle>PDF</SheetTitle>
            <SheetDescription
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}>
              <PDFViewer
                style={{
                  width: "95vw",
                  height: "92vh",
                  alignSelf: "center",
                }}>
                <Document
                  style={{ marginBottom: 10 }}
                  title="test title"
                  subject="test subject"
                  creator="Admin"
                  author="Tak"
                  producer="Bolt">
                  <Page size="A5" wrap style={tw("py-10 px-5")}>
                    <Image fixed src={entete} style={{ marginBottom: 20 }} />

                    {content && pdfConverter(content)}
                    <View
                      fixed
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        position: "absolute",
                        bottom: 0,
                        width: "100vw",
                      }}>
                      <BarCode />
                      <Image
                        debug
                        src={piedDePage}
                        style={{
                          height: 30,
                          marginTop: 5,
                        }}
                      />
                    </View>
                  </Page>
                </Document>
              </PDFViewer>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
}

export default PrescriptionToPDF;
