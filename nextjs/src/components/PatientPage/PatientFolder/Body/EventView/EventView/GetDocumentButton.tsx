import scrollToLocation from "@/components/plateEditor/lib/ScrollToLocation";
import { getNodeById } from "@/components/plateEditor/lib/getNodeById";
import type { DocumentHeaderElementTypeWithId } from "@/components/plateEditor/plate-app/Documents/DocumentHeaderUtils";
import { Button } from "@/components/ui/button";
import { useBoltStore } from "@/stores/boltStore";
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
