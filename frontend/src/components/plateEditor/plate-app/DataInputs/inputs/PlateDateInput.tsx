import { Input } from "@/components/ui/input";
import React, { forwardRef } from "react";
import { InputMask } from "@react-input/mask";
import type { DataTextInputProps } from "../DataInputUtils";
import { classNames } from "@/lib/utils";

const CustomDateInput = forwardRef<HTMLInputElement, any>(
  (props, forwardedRef) => {
    return <Input className="" type="date" ref={forwardedRef} {...props} />;
  }
);
CustomDateInput.displayName = "plate-date-input";

function PlateDateInput({ element, onChange }: DataTextInputProps) {
  return (
    <InputMask
      component={CustomDateInput}
      mask="jj/mm/aaaa"
      replacement={{ j: /\d/, m: /\d/, a: /\d/ }}
      showMask
      separate
      className={classNames(element.className ?? "")}
      value={element.value}
      onChange={onChange}
      type="date"
    />
  );
}

export default PlateDateInput;
