import { Button } from "@/components/ui/button";
import { useEditorRef } from "@udecode/plate-common";
import { useCallback } from "react";
import { TfiWrite } from "react-icons/tfi";

function InsertWidgetButton({ n }: { n: any[] }) {
  const editor = useEditorRef();

  const insert = useCallback(() => {
    editor.insertFragment(n);
  }, [editor, n]);
  return (
    <Button size="sm" variant="ghost" onClick={insert}>
      <TfiWrite />
    </Button>
  );
}

export default InsertWidgetButton;
