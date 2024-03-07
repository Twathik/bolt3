import type { TDescendant } from "@udecode/plate-common";
import type { clinicalEventDocument } from "../Documents/DocumentHeaderUtils";
const removeId = (children: TDescendant[]) =>
  children.map((c) => {
    if (c?.children) {
      c.children = removeId(c.children as TDescendant[]);
    }
    return { ...c, id: undefined };
  });
const removeIdsFromCopiedDocument = (
  document: clinicalEventDocument
): clinicalEventDocument =>
  document.map((d) => {
    if (d?.children) {
      d.children = removeId(d.children as TDescendant[]);
    }
    return { ...d, id: undefined };
  });

export default removeIdsFromCopiedDocument;
