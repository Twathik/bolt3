import type { TemplatesFetchTemplateResponseData } from "@/components/generated/models";
import { Button } from "@/ui/components/ui/button";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import { useNavigate } from "@remix-run/react";
import React, { useCallback, useRef } from "react";
import { generateDocumentType } from "../utils/generateDucumentType";
import AppLexical from "@/components/GeneralComponents/AppLexical/AppLexical";
import { ClientOnly } from "remix-utils/client-only";
import { DotLoader } from "react-spinners";
import type { EditorState } from "lexical";
import { useMutation } from "@/lib/wundergraph";
import { debounce } from "lodash-es";
import { Badge } from "@/ui/components/ui/badge";
import DiagnosticsPlugin from "@/components/ClinicalEvents/ClinicalDiagnostic/DiagnosticsPlugin/DiagnosticsPlugin";

function DocumentTemplateEditor({
  template,
}: {
  template: TemplatesFetchTemplateResponseData["mainDb_documentTemplate"];
}) {
  const router = useNavigate();
  const { trigger, isMutating } = useMutation({
    operationName: "templates/updateTemplate",
  });
  const navigate = useCallback(() => {
    router(-1);
  }, [router]);

  const save = useCallback(
    async (editorState: EditorState) => {
      console.log("trigger");
      await trigger({
        id: template?.id ?? "",
        template: JSON.stringify(editorState.toJSON()),
      });
    },
    [template?.id, trigger]
  );
  const debouncedFunction = useRef(debounce(save, 2000));

  const onChange = useCallback(
    async (editorState: EditorState) => {
      if (template) {
        await debouncedFunction.current(editorState);
      }
    },
    [template]
  );

  return (
    <div>
      <div className="grid grid-cols-12">
        <div className="col-span-1 flex justify-start">
          <Button onClick={navigate}>
            <ChevronLeftIcon className="h-10 w-10 pr-2" /> Revenir
          </Button>
        </div>
        <div className="col-span-11 flex justify-center">
          <strong className="underline text-3xl">
            Template pour le type de document :{" "}
            {generateDocumentType({ eventType: template!.eventType })}
          </strong>
        </div>
      </div>

      <div className="mt-20">
        <div className="h-10 flex justify-end">
          {isMutating && <Badge>sauvegarde en cours</Badge>}
        </div>
        <ClientOnly
          fallback={
            <div className="w-full h-1/2 flex justify-center mt-20">
              <DotLoader />
            </div>
          }>
          {() => (
            <AppLexical
              onChangeCallback={onChange}
              initialState={template?.template}>
              <DiagnosticsPlugin />
            </AppLexical>
          )}
        </ClientOnly>
      </div>
    </div>
  );
}

export default DocumentTemplateEditor;
