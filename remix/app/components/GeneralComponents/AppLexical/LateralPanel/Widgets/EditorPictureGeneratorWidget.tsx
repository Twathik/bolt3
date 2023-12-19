import type { DataTableGetDataTableConfigurationsResponseData } from "@/components/generated/models";
import React from "react";

function EditorPictureGeneratorWidget({
  generator,
}: {
  generator: DataTableGetDataTableConfigurationsResponseData["mainDb_getDataTableConfiguration"][0]["widgets"][0];
}) {
  return <div>EditorPictureGeneratorWidget</div>;
}

export default EditorPictureGeneratorWidget;
