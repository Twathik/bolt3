import type { AutoformatPlugin } from "@udecode/plate-autoformat";
import type { PlatePlugin } from "@udecode/plate-common";

import { autoformatRules } from "@/components/plateEditor/lib/autoformatRules";

export const autoformatPlugin: Partial<PlatePlugin<AutoformatPlugin>> = {
  options: {
    rules: autoformatRules as any,
    enableUndoOnDelete: true,
  },
};
