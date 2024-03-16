import { useBoltStore } from "@/stores/boltStore";
import type { Value } from "@udecode/plate-common";
import { useEditorRef } from "@udecode/plate-core";
import { useEffect } from "react";

function ReloadEditor({ initialValue }: { initialValue: Value }) {
  const patient = useBoltStore((s) => s.patient);
  const editor = useEditorRef();

  useEffect(() => {
    editor.children = initialValue;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [patient?.updated]);
  return null;
}

export default ReloadEditor;
