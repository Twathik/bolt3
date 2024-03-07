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

function PlateDateInput({ element, onChange, value }: DataTextInputProps) {
  return (
    <InputMask
      component={CustomDateInput}
      mask="jj/mm/aaaa"
      replacement={{ j: /\d/, m: /\d/, a: /\d/ }}
      showMask
      separate
      onMask={(e) => {
        console.log({ e });
      }}
      className={classNames(element.className ?? "")}
      value={value}
      onChange={onChange}
      type="date"
    />
  );
}

export default PlateDateInput;
