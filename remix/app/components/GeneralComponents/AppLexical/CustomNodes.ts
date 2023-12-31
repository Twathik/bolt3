import type { Klass, LexicalNode } from "lexical";
import { DiagnosticNode } from "../../ClinicalEvents/ClinicalDiagnostic/DiagnosticsPlugin/DiagnosticNode";
import { AbbreviationNode } from "./AbbreviationsPlugins/AbbreviationPlugin/AbbreviationNode";

const CustomNodes: Array<Klass<LexicalNode>> = [
  DiagnosticNode,
  AbbreviationNode,
];

export default CustomNodes;
