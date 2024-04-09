import * as React from "react";
import { MultiSelect } from "react-multi-select-component";
import { Badge } from "./badge";
import { X } from "lucide-react";

export type FancyMultiSelectOptions = Record<"value" | "label", string>;

export function FancyMultiSelect({
  options,
  selected,
  onValueChange,
}: {
  options: FancyMultiSelectOptions[];
  selected: FancyMultiSelectOptions[];
  onValueChange: React.Dispatch<
    React.SetStateAction<FancyMultiSelectOptions[]>
  >;
}) {
  const handleUnselect = React.useCallback(
    (option: FancyMultiSelectOptions) => {
      onValueChange((prev) => prev.filter((s) => s.value !== option.value));
    },
    [onValueChange]
  );
  return (
    <div>
      <MultiSelect
        options={options}
        value={selected}
        onChange={onValueChange}
        labelledBy="Selectionnez"
        overrideStrings={{
          allItemsAreSelected: "Tous les elements sont selectionnés",
          clearSearch: "Vider le champ recherche",
          clearSelected: "Annuler les selections",
          noOptions: "Aucune option",
          search: "Rechercher",
          selectAll: "Selectionner tout",
          selectAllFiltered: "Select tout (avec filtre)",
          selectSomeItems: "Selectionner...",
          create: "Créer",
        }}
        valueRenderer={(selected) =>
          selected.map((option) => (
            <Badge key={option.value} variant="secondary" className="mx-2">
              {option.label}
              <button
                className="ml-1 ring-offset-background rounded-full outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                onMouseDown={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
                onClick={() => handleUnselect(option)}
              >
                <X className="h-3 w-3 text-muted-foreground hover:text-foreground" />
              </button>
            </Badge>
          ))
        }
      />
    </div>
  );
}
