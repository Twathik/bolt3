import React from "react";
import type { PlateInputTypes } from "@/components/plateEditor/plate-app/DataInputs/DataInputUtils";
import { Text, View } from "@react-pdf/renderer";
import { format } from "date-fns";
import { InlineStyle } from "../DefaultStyles";
import PDFIcons from "../PDFIcons";
import type { FancyMultiSelectOptions } from "@/components/ui/FancyMultiSelect";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import type { PdfCheckerProps } from "../PdfCheckerInterface";

function DataInputFormatter({ content, parentStyle }: PdfCheckerProps) {
  switch (content.inputType as PlateInputTypes) {
    case "text":
    case "select":
      return (
        <Text style={{ ...InlineStyle, ...parentStyle }}>{`${
          content.value as string
        } `}</Text>
      );
    case "number":
      return (
        <Text style={{ ...InlineStyle, ...parentStyle }}>
          {`${(content.value as number).toString()} `}
        </Text>
      );
    case "date":
      const rowDate = (content.value as string)
        .split("-")
        .map((d) => parseInt(d, 10));
      const date = new Date(rowDate[0], rowDate[1] - 1, rowDate[2]);
      const formated = format(date, "dd-MM-yyyy");
      return (
        <Text style={{ ...InlineStyle, ...parentStyle }}>{`${formated} `}</Text>
      );
    case "multiple":
      return (
        <Text style={{ ...InlineStyle, ...parentStyle }}>
          {`${(content.multiValues as FancyMultiSelectOptions[])
            .map((v) => v.value)
            .join(", ")} `}
        </Text>
      );
    case "checkbox":
      return (
        <View style={{ marginLeft: "2px", marginRight: "2px" }}>
          <PDFIcons
            faIcon={content.value === 1 ? faCheck : faXmark}
            style={{
              color: content.value === 1 ? "#000" : "#991b1b",
              width: "12px",
            }}
          />
        </View>
      );
    default:
      return (
        <Text style={{ ...InlineStyle, color: "red", fontWeight: "black" }}>
          Unknown
        </Text>
      );
  }
}

export default DataInputFormatter;
