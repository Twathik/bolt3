import type { MultiSelectInputProps } from "../DataInputUtils";
import type { FancyMultiSelectOptions } from "@/components/ui/FancyMultiSelect";
import { FancyMultiSelect } from "@/components/ui/FancyMultiSelect";

function PlateMultiSelect({
  element,
  onMultiValueChange,
}: MultiSelectInputProps) {
  return (
    <FancyMultiSelect
      onValueChange={(value) =>
        onMultiValueChange(value as FancyMultiSelectOptions[])
      }
      options={element.options!}
      selected={element.multiValues ?? []}
    />
  );
}

export default PlateMultiSelect;
