import type { mainDb_EventCategoryValues } from "@/components/generated/models";
import type { DocumentHeaderTypes } from "@/ui/components/plate-app/Documents/DocumentHeaderUtils";
import type { LucideIcon } from "lucide-react";

export type menuItemsType = {
  label: string;
  items: {
    value: string;
    label: string;
    documentType: DocumentHeaderTypes;
    eventCategory: mainDb_EventCategoryValues;
    description: string;
    icon: LucideIcon;
  }[];
};
