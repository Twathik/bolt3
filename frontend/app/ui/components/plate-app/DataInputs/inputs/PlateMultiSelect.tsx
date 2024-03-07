import type { MultiSelectInputProps } from "../DataInputUtils";
import { FancyMultiSelect } from "@/ui/components/ui/FancyMultiSelect";

function PlateMultiSelect({
  element,
  onMultiValueChange,
  value,
}: MultiSelectInputProps) {
  return (
    <FancyMultiSelect
      onValueChange={onMultiValueChange}
      options={element.options!}
      selected={value}
    />
  );
}

export default PlateMultiSelect;