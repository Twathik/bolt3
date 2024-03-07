import { useBoltStore } from "@/stores/boltStore";
import type { DocumentHeaderElementTypeWithId } from "@/ui/components/plate-app/Documents/DocumentHeaderUtils";
import scrollToLocation from "@/ui/components/plate-app/utils/ScrollToLocation";
import { getNodeById } from "@/ui/components/plate-app/utils/getNodeById";
import { Button } from "@/ui/components/ui/button";
import { focusEditor, useEditorRef } from "@udecode/plate-common";
import { useCallback } from "react";
import { IoDocumentTextOutline } from "react-icons/io5";

function GetDocumentButton({ doc }: { doc: DocumentHeaderElementTypeWithId }) {
  const editor = useEditorRef();
  const setFocusedDocument = useBoltStore((s) => s.setFocusedDocument);

  const focus = useCallback(() => {
    const documentHeaderFromEditor = getNodeById(editor, doc.id);

    if (documentHeaderFromEditor) {
      focusEditor(editor, {
        path: [documentHeaderFromEditor.path[0] + 1, 0],
        offset: 0,
      });
      scrollToLocation(doc.id);
      setFocusedDocument({ d: doc, payload: "{}" });
    }
  }, [doc, editor, setFocusedDocument]);

  return (
    <Button
      size="sm"
      variant="ghost"
      className="hover:bg-slate-400"
      onClick={focus}>
      <IoDocumentTextOutline />
    </Button>
  );
}

export default GetDocumentButton;
