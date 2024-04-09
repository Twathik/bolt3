import { classNames } from "@/lib/utils";
import type { DataTextInputProps } from "../DataInputUtils";
import { Input } from "@/components/plate-ui/input";

function PlateTextInput({ onChange, element }: DataTextInputProps) {
  return (
    <Input
      className={classNames(element.className ?? "")}
      type={element.inputType}
      placeholder={element.placeholder}
      value={element.value}
      onChange={onChange}
    />
  );
}

export default PlateTextInput;
