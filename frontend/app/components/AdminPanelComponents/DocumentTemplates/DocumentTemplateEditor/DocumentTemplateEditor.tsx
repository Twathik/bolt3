import type { TemplatesFetchTemplateResponseData } from "@/components/generated/models";
import { Button } from "@/ui/components/ui/button";
import { FaCircleChevronLeft } from "react-icons/fa6";
import { useNavigate } from "@remix-run/react";
import React, { useCallback, useRef } from "react";
import { generateDocumentType } from "../utils/generateDucumentType";

import { ClientOnly } from "remix-utils/client-only";
import { DotLoader } from "react-spinners";

import { useMutation } from "@/lib/wundergraph";
import { debounce } from "lodash-es";
import { Badge } from "@/ui/components/ui/badge";

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

  const save = useCallback(async () => {
    console.log("trigger");
  }, [template?.id, trigger]);
  const debouncedFunction = useRef(debounce(save, 2000));

  const onChange = useCallback(async () => {
    if (template) {
      console.log("changed");
    }
  }, [template]);

  return (
    <div>
      <div className="grid grid-cols-12">
        <div className="col-span-1 flex justify-start">
          <Button onClick={navigate}>
            <span className="h-10 w-10 pr-2">
              <FaCircleChevronLeft />
              Revenir
            </span>
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
          {() => <div>Document editor</div>}
        </ClientOnly>
      </div>
    </div>
  );
}

export default DocumentTemplateEditor;
