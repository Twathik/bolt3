import {
  autoformatArrow,
  autoformatLegal,
  autoformatLegalHtml,
  autoformatMath,
  autoformatPunctuation,
  autoformatSmartQuotes,
} from "@udecode/plate-autoformat";

import { autoformatBlocks } from "@/components/plateEditor/lib/autoformatBlocks";
import { autoformatIndentLists } from "@/components/plateEditor/lib/autoformatIndentLists";
import { autoformatMarks } from "@/components/plateEditor/lib/autoformatMarks";
import type { MyAutoformatRule } from "@/components/plateEditor/lib/plate-types";

export const autoformatRules = [
  ...autoformatBlocks,
  ...autoformatIndentLists,
  ...autoformatMarks,
  ...(autoformatSmartQuotes as MyAutoformatRule[]),
  ...(autoformatPunctuation as MyAutoformatRule[]),
  ...(autoformatLegal as MyAutoformatRule[]),
  ...(autoformatLegalHtml as MyAutoformatRule[]),
  ...(autoformatArrow as MyAutoformatRule[]),
  ...(autoformatMath as MyAutoformatRule[]),
];
