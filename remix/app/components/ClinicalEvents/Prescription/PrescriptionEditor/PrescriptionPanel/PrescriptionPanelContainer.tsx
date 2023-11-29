import { useBoltStore } from "@/stores/boltStore";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/ui/components/ui/card";
import { useCallback, useEffect, useMemo, useRef } from "react";
import PrescriptionElement from "./PrescriptionElement";
import LoadingPrescriptionComponent from "./LoadingPrescriptionComponent";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { getPrescriptionFromEditorState } from "@/lib/utils";
import type { EditorState } from "lexical";
import { debounce } from "lodash-es";

function PrescriptionFormContainer() {
  const [editor] = useLexicalComposerContext();
  const setPrescriptions = useBoltStore(
    (store) => store.setInitialPrescriptions
  );
  const prescriptions = useBoltStore((store) => store.prescriptions);

  const updatePDF = useCallback(
    (editorState: EditorState) => {
      const prescriptions = getPrescriptionFromEditorState({
        editorState: editorState.toJSON(),
      });
      setPrescriptions(prescriptions);
    },
    [setPrescriptions]
  );
  const debouncedFunction = useRef(debounce(updatePDF, 5000));

  const renderPrescriptions = useMemo(
    () =>
      prescriptions.map((p) => (
        <div key={p.prescriptionId}>
          <PrescriptionElement prescription={p} />
        </div>
      )),
    [prescriptions]
  );

  useEffect(() => {
    let isMounted = true;
    const unregister = editor.registerUpdateListener(({ editorState }) => {
      if (isMounted) {
        debouncedFunction.current(editorState);
      }
    });

    return () => {
      isMounted = false;
      unregister();
    };
  }, [editor]);
  return (
    <Card className="m-10">
      <CardHeader>
        <CardTitle>Details des préscriptions</CardTitle>
        <CardDescription>Ordonnance du 17/11/2023</CardDescription>
      </CardHeader>
      <CardContent>{renderPrescriptions}</CardContent>
      <CardFooter>
        <LoadingPrescriptionComponent />
      </CardFooter>
    </Card>
  );
}

export default PrescriptionFormContainer;
