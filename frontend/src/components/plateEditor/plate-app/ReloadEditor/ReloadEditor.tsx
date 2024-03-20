import type { Value } from "@udecode/plate-common";
import { useEditorRef } from "@udecode/plate-core";
import { useEffect } from "react";

function ReloadEditor({ initialValue }: { initialValue: Value }) {
  const editor = useEditorRef();

  useEffect(() => {
    editor.children = initialValue;
    console.log({ initialValue });
  }, [initialValue]);
  return null;
}

export default ReloadEditor;
