import { classNames } from "@/lib/utils";
import type { DataTextInputProps } from "../DataInputUtils";
import { Input } from "@/ui/components/plate-ui/input";

function PlateTextInput({ onChange, value, element }: DataTextInputProps) {
  return (
    <Input
      className={classNames(element.className ?? "")}
      type={element.inputType}
      placeholder={element.placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

export default PlateTextInput;
