import type { FocusedClinicalEvent } from "@/stores/boltStoreType";
import type { TDescendant, TElement } from "@udecode/plate-common";

const getClinicalEventContentFromEditor = ({
  textContent,
  focusedClinicalEvent,
}: {
  textContent: TElement;
  focusedClinicalEvent: FocusedClinicalEvent;
}) => {
  let documentHeaderIndex = textContent.children.findIndex(
    (e) =>
      e.type === "document-header" &&
      e?.eventId === focusedClinicalEvent?.eventId
  );

  if (documentHeaderIndex !== -1) {
    const documentContent: TDescendant[] = [];
    documentContent.push(textContent.children[documentHeaderIndex]);
    documentHeaderIndex++;
    while (
      textContent.children[documentHeaderIndex] &&
      textContent.children[documentHeaderIndex]?.type !== "document-header"
    ) {
      documentContent.push(textContent.children[documentHeaderIndex]);
      documentHeaderIndex++;
    }

    return documentContent;
  }
  return null;
};

export default getClinicalEventContentFromEditor;
