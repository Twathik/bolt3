import PdfComponent from "@/components/GeneralComponents/PDFcomponent/PdfComponent";
import { getNodesByType } from "@/components/plateEditor/lib/getNodesByType";
import { useToast } from "@/components/ui/use-toast";
import type { mainDb_PatientDocumentTypeValues } from "@/components/wg-generated/models";
import { useQuery } from "@/components/wg-generated/nextjs";
import type { PngBlobType } from "@/lib/generalUtils/PDFImageUtils";
import { convertBlob } from "@/lib/generalUtils/PDFImageUtils";
import getClinicalEventContentFromEditor from "@/lib/generalUtils/getClinicalEventContentFromEditor";
import {
  getDocumentPaddings,
  type FormattedDocumentTemplate,
  type RawDocumentPaddingsInterface,
} from "@/lib/generalUtils/getDocumentSettings";
import { useBoltStore } from "@/stores/boltStore";
import type { PageSize } from "@react-pdf/types";
import type { TDescendant, TElement } from "@udecode/plate-common";
import { ELEMENT_IMAGE } from "@udecode/plate-media";
import React, { useEffect, useState } from "react";

function PDFrootComponent({
  documentType,
  size,
}: {
  documentType: mainDb_PatientDocumentTypeValues;
  size: PageSize;
}) {
  const patient = useBoltStore((s) => s.patient);
  const focusedClinicalEvent = useBoltStore((s) => s.focusedClinicalEvent);
  const { data, error } = useQuery({
    operationName: "patients/getOnePatientDocument",
    input: { patientId: patient!.id, documentType },
  });
  const { toast } = useToast();
  const [clinicalEventContent, setClinicalEventContent] = useState<{
    clinicalEventContent: TDescendant[];
    settings: FormattedDocumentTemplate;
  }>();

  useEffect(() => {
    if (error)
      toast({
        title: "Une erreure est survenue!",
        description: "Les donnee du document n'ont pas pu etre reccupérés",
        variant: "destructive",
      });
  }, [error, toast]);

  useEffect(() => {
    let req = true;
    const formatData = async () => {
      if (data && focusedClinicalEvent) {
        let rowTextContent =
          data.mainDb_getPatient?.DocumentStore[0].textContent;
        if (rowTextContent && rowTextContent.length > 0) {
          const textContent = JSON.parse(rowTextContent) as TElement;
          const clinicalEventContent = getClinicalEventContentFromEditor({
            focusedClinicalEvent,
            textContent,
          });

          if (clinicalEventContent) {
            const imageElements = getNodesByType({
              nodesToCheck: clinicalEventContent,
              type: ELEMENT_IMAGE,
            });
            const imageFormat = imageElements.map((node, index) => {
              return new Promise(async (resolve, reject) => {
                try {
                  const blob = await fetch(node.n.url as string).then((res) =>
                    res.blob()
                  );

                  convertBlob({
                    blob,
                    type: "image/png",
                    callback: (pngBlob: PngBlobType) => {
                      node.n.url = URL.createObjectURL(pngBlob.blob);
                      node.n.width = pngBlob.width;
                      node.n.height = pngBlob.height;
                      resolve(null);
                    },
                    content: node.n as TElement,
                    size,
                    paddingLeft: 50,
                  });
                } catch (error) {
                  reject(error);
                }
              });
            });

            await Promise.all(imageFormat);
            const rawSettings = data.mainDb_settings[0]
              .documentTemplateConfiguration
              ? (JSON.parse(
                  data.mainDb_settings[0].documentTemplateConfiguration
                ) as RawDocumentPaddingsInterface)
              : null;
            const settings: FormattedDocumentTemplate = {
              paddings: getDocumentPaddings({ size, settings: rawSettings }),
              urls: rawSettings
                ? rawSettings.urls
                : {
                    evenUrl:
                      "/Templates/cardiologist-template-1-with-header.jpg",
                    oddUrl: "/Templates/cardiologist-template-1-no-header.jpg",
                  },
            };

            if (req) {
              setClinicalEventContent({
                clinicalEventContent,
                settings,
              });
            }
          }
        }
      }
    };
    formatData().catch((e: any) => {
      console.log({ e });
    });
    return () => {
      req = false;
    };
  }, [data, focusedClinicalEvent, size]);
  return clinicalEventContent ? (
    <PdfComponent content={clinicalEventContent} size={size} />
  ) : (
    <div>No Content</div>
  );
}

export default PDFrootComponent;
