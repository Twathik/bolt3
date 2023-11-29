import type { Klass, LexicalNode } from "lexical";
import { PrescriptionNode } from "./PrescriptionPlugin/PrescriptionNode";
import { PrescriptionLayoutItemNode } from "./PrescriptionLayout/PrescriptionLayoutItemNode";
import { PrescriptionLayoutContainerNode } from "./PrescriptionLayout/PrescriptionLayoutContainerNode";

const CustomNodes: Array<Klass<LexicalNode>> = [
  PrescriptionLayoutItemNode,
  PrescriptionNode,
  PrescriptionLayoutContainerNode,
  PrescriptionLayoutItemNode,
  PrescriptionLayoutContainerNode,
];

export default CustomNodes;
