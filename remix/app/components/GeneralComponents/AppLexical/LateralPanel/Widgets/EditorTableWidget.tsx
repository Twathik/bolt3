import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { useCallback } from "react";
import { generateDataTableRows } from "../../utils";
import type { DataTableGetDataTableConfigurationsResponseData } from "@/components/generated/models";
import { Button } from "@/ui/components/ui/button";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { INSERT_WIDGET_COMMAND } from "../../DataTablesCommands";

function EditorTableWidget({
  table,
  tableContentType,
}: {
  table: DataTableGetDataTableConfigurationsResponseData["mainDb_getDataTableConfiguration"][0]["widgets"][0];
  tableContentType: string;
}) {
  const [editor] = useLexicalComposerContext();
  const onClick = useCallback(() => {
    console.log({ tableContentType });
    editor.dispatchCommand(INSERT_WIDGET_COMMAND, {
      rows: generateDataTableRows({ configuration: table.config! }),
      tableContentType,
    });
  }, [editor, table.config, tableContentType]);
  return (
    <div className="relative flex justify-between gap-x-6 m-2">
      <div className="flex min-w-0 gap-x-4">
        <div className="min-w-0 flex-auto">
          <p className="text-sm font-semibold leading-6 text-gray-900">
            {table.tableName}
          </p>
        </div>
      </div>
      <div className="flex shrink-0 items-center gap-x-4">
        <div className="flex flex-col items-end">
          <Button
            variant="default"
            onClick={onClick}
            className="text-sm leading-6 bg-sky-800 hover:bg-sky-600">
            <ChevronRightIcon
              className="h-4 w-4 flex-none text-white"
              aria-hidden="true"
            />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default EditorTableWidget;
