import type { PlateElementProps } from "@udecode/plate-common";
import {
  PlateElement,
  createPluginFactory,
  useElement,
} from "@udecode/plate-common";
import { DOCUMENT_HEADER_KEY } from "./DocumentsKeys";
import { useCallback, useEffect } from "react";
import type { DocumentHeaderElementTypeWithId } from "./DocumentHeaderUtils";
import { generateDocumentHeaderTitle } from "./DocumentHeaderUtils";

export const createDocumentHeaderPlugin = createPluginFactory({
  key: DOCUMENT_HEADER_KEY,
  isElement: true,
  isInline: false,
});

export function DocumentHeaderElement({
  className,
  children,
  ...props
}: PlateElementProps) {
  const element = useElement<DocumentHeaderElementTypeWithId>();
  useEffect(() => {
    element.firstInsert = false;
  }, [element]);
  const DocumentHeader = useCallback(
    () => generateDocumentHeaderTitle(element),
    [element]
  );

  return (
    <PlateElement
      asChild
      className={className}
      {...props}
      contentEditable={false}
      id={element.id}>
      <div>
        <span className="font-bold underline">
          {DocumentHeader()} : {element.createdAt}
        </span>
        <div>{children}</div>
      </div>
    </PlateElement>
  );
}
