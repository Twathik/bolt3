import type { DocumentHeaderElementTypeWithId } from "@/components/plateEditor/plate-app/Documents/DocumentHeaderUtils";
import { DOCUMENT_HEADER_KEY } from "@/components/plateEditor/plate-app/Documents/DocumentsKeys";
import { useBoltStore } from "@/stores/boltStore";
import type { TElement, Value } from "@udecode/plate-common";
import { useEffect } from "react";

function useGetDocumentHeadersFromEditor({
  initialValue,
}: {
  initialValue: Value;
}) {
  const setDocumentHeaders = useBoltStore((s) => s.setDocumentHeaders);
  useEffect(() => {
    const doc: Value = initialValue?.reduce((documentHeaders, element) => {
      if (element.type === DOCUMENT_HEADER_KEY)
        return [...documentHeaders, element];
      return documentHeaders;
    }, [] as TElement[]);
    setDocumentHeaders(doc as DocumentHeaderElementTypeWithId[]);
  }, [initialValue, setDocumentHeaders]);
  return null;
}

export default useGetDocumentHeadersFromEditor;
