import type { DocumentHeaderElementTypeWithId } from "@/components/plateEditor/plate-app/Documents/DocumentHeaderUtils";
import { DOCUMENT_HEADER_KEY } from "@/components/plateEditor/plate-app/Documents/DocumentsKeys";
import { useBoltStore } from "@/stores/boltStore";
import type { TElement, Value } from "@udecode/plate-common";
import { useEffect } from "react";

function useGetDocumentHeadersFromEditor({
  document,
}: {
  document: string | undefined;
}) {
  const patient = useBoltStore((s) => s.patient);
  const setDocumentHeaders = useBoltStore((s) => s.setDocumentHeaders);
  useEffect(() => {
    if (patient && document) {
      const doc: Value = (JSON.parse(document) as Value)?.reduce(
        (documentHeaders, element) => {
          if (element.type === DOCUMENT_HEADER_KEY)
            return [...documentHeaders, element];
          return documentHeaders;
        },
        [] as TElement[]
      );
      setDocumentHeaders(doc as DocumentHeaderElementTypeWithId[]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setDocumentHeaders]);

  return null;
}

export default useGetDocumentHeadersFromEditor;
