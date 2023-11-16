import type { Klass, LexicalNode } from "lexical";
import { PrescriptionNode } from "./PrescriptionPlugin/PrescriptionNode";

const CustomNodes: Array<Klass<LexicalNode>> = [PrescriptionNode];

export default CustomNodes;
