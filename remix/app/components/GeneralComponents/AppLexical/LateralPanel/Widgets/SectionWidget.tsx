import type { DataTableGetDataTableConfigurationsResponseData } from "@/components/generated/models";
import EditorTableWidget from "./EditorTableWidget";
import EditorPictureGeneratorWidget from "./EditorPictureGeneratorWidget";

function SectionWidget({
  widget,
  tableContentType,
}: {
  widget: DataTableGetDataTableConfigurationsResponseData["mainDb_getDataTableConfiguration"][0]["widgets"][0];
  tableContentType: string;
}) {
  switch (widget.widgetType) {
    case "table":
      return (
        <EditorTableWidget table={widget} tableContentType={tableContentType} />
      );
    case "pictureGenerator":
      return <EditorPictureGeneratorWidget generator={widget} />;
    default:
      throw Error("Unknown widget type");
  }
}

export default SectionWidget;
