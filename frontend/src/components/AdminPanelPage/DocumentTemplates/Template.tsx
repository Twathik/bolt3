import { classNames } from "@/lib/utils";
import { generateDocumentType } from "../../../lib/utils/generateDucumentType";

import { useCallback } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import type { TemplatesGetTemplatesResponseData } from "@/components/wg-generated/models";

function Template({
  template,
}: {
  template: TemplatesGetTemplatesResponseData["mainDb_documentTemplates"][0];
}) {
  const { id, eventType, empty } = template;
  const router = useRouter();

  const navigate = useCallback(() => {
    router.push(`/admin-panel/templates/editor/${id}`);
  }, [id, router]);

  return (
    <li
      key={id}
      className="m-5 flex items-center justify-between gap-x-6 rounded-sm border-l-2 border-solid border-slate-400 bg-slate-50 p-5 py-5 shadow-lg">
      <div className="min-w-0">
        <div className="flex items-start gap-x-3">
          <p className="text-sm font-semibold leading-6 text-gray-900">
            Template pour le type de document{" "}
            {generateDocumentType({ eventType })}
          </p>
          <p
            className={classNames(
              "mt-0.5 whitespace-nowrap rounded-md border-2 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset",
              !empty
                ? "border-green-500 text-green-500"
                : "border-rose-700 text-rose-700"
            )}>
            {!empty ? "enregistrée" : "vierge"}
          </p>
        </div>
      </div>
      <div className="flex flex-none items-center gap-x-4">
        <Button onClick={navigate}>Modifier le template</Button>
      </div>
    </li>
  );
}

export default Template;
