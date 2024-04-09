import { Checkbox } from "@/components/plate-ui/checkbox";
import type { DataCheckBoxInputProps } from "../DataInputUtils";

function PlateCheckBoxInput({
  element,
  onCheckedChange,
}: DataCheckBoxInputProps) {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        id={element.inputName}
        onCheckedChange={onCheckedChange}
        checked={Boolean(element.value)}
      />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </label>
    </div>
  );
}

export default PlateCheckBoxInput;
