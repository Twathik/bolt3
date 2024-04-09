import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { DataSelectInputProps } from "../DataInputUtils";
import { useMemo } from "react";
import { classNames } from "@/lib/utils";

function PlateSelectInput({ element, onValueChange }: DataSelectInputProps) {
  const options = useMemo(
    () =>
      element.options?.map((op) => (
        <SelectItem key={op.value} value={op.value}>
          {op.label}
        </SelectItem>
      )),
    [element.options]
  );
  return (
    <Select onValueChange={onValueChange} value={element.value as string}>
      <SelectTrigger
        className={classNames("w-[180px]", element.className ?? "")}
      >
        <SelectValue />
      </SelectTrigger>
      <SelectContent>{options}</SelectContent>
    </Select>
  );
}

export default PlateSelectInput;
