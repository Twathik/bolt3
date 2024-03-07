import { FaCircleChevronLeft } from "react-icons/fa6";
import React, { Suspense, useCallback } from "react";
import { generateDocumentType } from "../../../../lib/utils/generateDucumentType";
import { DotLoader } from "react-spinners";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { TemplatesFetchTemplateResponseData } from "@/components/wg-generated/models";
import { useMutation } from "@/components/wg-generated/nextjs";

function DocumentTemplateEditor({
  template,
}: {
  template: TemplatesFetchTemplateResponseData["mainDb_documentTemplate"];
}) {
  const router = useRouter();

  const navigate = useCallback(() => {
    router.forward();
  }, [router]);
  const { isMutating } = useMutation({
    operationName: "templates/updateTemplate",
  });
  /*
  const save = useCallback(async () => {
    console.log("trigger");
  }, []);
   
  
  const debouncedFunction = useRef(debounce(save, 2000));

  const onChange = useCallback(async () => {
    if (template) {
      console.log("changed");
    }
  }, [template]); */

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
        <Suspense
          fallback={
            <div className="w-full h-1/2 flex justify-center mt-20">
              <DotLoader />
            </div>
          }>
          <div>Document editor</div>
        </Suspense>
      </div>
    </div>
  );
}

export default DocumentTemplateEditor;
