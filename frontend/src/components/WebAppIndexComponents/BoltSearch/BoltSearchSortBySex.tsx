"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { UseSortByProps, useSortBy } from "react-instantsearch";

const CustomSortBy = (props: UseSortByProps) => {
  const { initialIndex, currentRefinement, options, refine, canRefine } =
    useSortBy(props);
  console.log({ options, currentRefinement, initialIndex, canRefine });

  return (
    <div className="flex grid-cols-2 flex-row items-center gap-3">
      <Label htmlFor="sexFilter">Filtre par sexe</Label>

      <Select onValueChange={refine} name="sexFilter" defaultValue="patients">
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="aucun" />
        </SelectTrigger>
        <SelectContent>
          {options.map((op) => (
            <SelectItem key={op.label} value={op.value}>
              {op.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default CustomSortBy;
