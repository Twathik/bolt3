import {
  autoformatArrow,
  autoformatLegal,
  autoformatLegalHtml,
  autoformatMath,
  autoformatPunctuation,
  autoformatSmartQuotes,
} from "@udecode/plate-autoformat";

import { autoformatBlocks } from "@/ui/components/plateEditor/lib/autoformatBlocks";
import { autoformatIndentLists } from "@/ui/components/plateEditor/lib/autoformatIndentLists";
import { autoformatMarks } from "@/ui/components/plateEditor/lib/autoformatMarks";
import type { MyAutoformatRule } from "@/ui/components/plateEditor/lib/plate-types";

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
