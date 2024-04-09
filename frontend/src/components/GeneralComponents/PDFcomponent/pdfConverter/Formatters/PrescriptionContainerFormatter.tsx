import React from "react";
import ContentChecker from "../ContentChecker";
import type { TElement } from "@udecode/plate-common";
import type { PdfCheckerProps } from "../PdfCheckerInterface";

function PrescriptionContainerFormatter({
  content,
  ...otherProps
}: PdfCheckerProps) {
  return (content as TElement).children.map((child) => (
    <ContentChecker key={Math.random()} content={child} {...otherProps} />
  ));
}

export default PrescriptionContainerFormatter;
