/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { InlineStyle } from "./DefaultStyles";
import ParagraphFormatter from "./Formatters/ParagraphFormatter";
import BlockquoteFormatter from "./Formatters/BlockquoteFormatter";
import HorizontalRuleFormatter from "./Formatters/HorizontalRuleFormatter";
import TableFormatter from "./Formatters/TableFormatter";
import PrescriptionTableFormatter from "./Formatters/PrescriptionTableFormatter";
import PrescriptionContainerFormatter from "./Formatters/PrescriptionContainerFormatter";
import MentionResultFormatter from "./Formatters/MentionResultFormatter";
import DataInputFormatter from "./Formatters/DataInputFormatter";
import ColumnContainerFormatter from "./Formatters/ColumnContainerFormatter";
import type { PdfCheckerProps } from "./PdfCheckerInterface";
import ContainerElementFormatter from "./Formatters/ContainerElementFormatter";
import ImageFormatter from "./Formatters/ImageFormatter";
import { PAGE_BREAK_KEY } from "@/components/plateEditor/plate-app/PageBreak/PageBreakKeys";
import PageBreakFormatter from "./Formatters/PageBreakFormatter";
import { ELEMENT_BLOCKQUOTE } from "@udecode/plate-block-quote";
import { ELEMENT_PARAGRAPH } from "@udecode/plate-paragraph";
import { ELEMENT_HR } from "@udecode/plate-horizontal-rule";
import { ELEMENT_TABLE } from "@udecode/plate-table";
import {
  PRESCRIPTION_DRUG_COL,
  PRESCRIPTION_FREQUENCY_COL,
  PRESCRIPTION_QUANTITY_COL,
  PRESCRIPTION_TABLE_KEY,
} from "@/components/plateEditor/plate-app/PrescriptionTable/PrescriptionTableKey";
import { DrugMentionKey } from "@/components/plateEditor/plate-app/Medic-plugin/drug-plugin-key";
import { DIAGNOSTIC_MENTION_KEY } from "@/components/plateEditor/plate-app/Diag-plugin/diag-plugin-key";
import { DATA_INPUT_ELEMENT } from "@/components/plateEditor/plate-app/DataInputs/DataInputKeys";
import {
  COLUMN_CONTAINER_KEY,
  COLUMN_ELEMENT_KEY,
} from "@/components/plateEditor/plate-app/ColumnSystem/ColumnSystemKeys";
import { ELEMENT_IMAGE } from "@udecode/plate-media";
import TextPdfRenderer from "./TextPdfRenderer";
import { DOCUMENT_HEADER_KEY } from "@/components/plateEditor/plate-app/Documents/DocumentsKeys";
import DocumentHeaderFormatter from "./Formatters/DocumentHeaderFormatter";

function ContentChecker({
  content,
  parentStyle,
  size,
  listInformation,
  patient,
  root,
}: PdfCheckerProps) {
  const props: PdfCheckerProps = {
    content,
    parentStyle,
    size,
    listInformation,
    patient,
  };
  if (content.type) {
    switch (content.type) {
      case ELEMENT_PARAGRAPH:
        return <ParagraphFormatter {...props} />;
      case ELEMENT_BLOCKQUOTE:
        return <BlockquoteFormatter {...props} />;
      case ELEMENT_HR:
        return <HorizontalRuleFormatter />;
      case ELEMENT_TABLE:
        return <TableFormatter {...props} />;
      case PRESCRIPTION_TABLE_KEY:
        return <PrescriptionTableFormatter {...props} />;

      case PRESCRIPTION_DRUG_COL:
      case PRESCRIPTION_FREQUENCY_COL:
      case PRESCRIPTION_QUANTITY_COL:
        return <PrescriptionContainerFormatter {...props} />;
      case DrugMentionKey:
      case DIAGNOSTIC_MENTION_KEY:
        return <MentionResultFormatter {...props} />;
      case DATA_INPUT_ELEMENT:
        return <DataInputFormatter {...props} />;
      case COLUMN_CONTAINER_KEY:
        return <ColumnContainerFormatter {...props} />;
      case COLUMN_ELEMENT_KEY:
        return <ContainerElementFormatter {...props} />;
      case ELEMENT_IMAGE:
        return <ImageFormatter {...props} />;
      case PAGE_BREAK_KEY:
        return <PageBreakFormatter />;
      case DOCUMENT_HEADER_KEY:
        return <DocumentHeaderFormatter {...props} />;

      default:
        console.log({ content });
        return (
          <View>
            <Text style={{ ...InlineStyle }}>{content.type as string}</Text>
          </View>
        );
    }
  }
  return root ? (
    <View style={{ minHeight: 17 }}>
      <TextPdfRenderer {...props} />
    </View>
  ) : (
    <TextPdfRenderer {...props} />
  );
}

export default ContentChecker;
