import type { PlateElementProps } from "@udecode/plate-common";
import {
  PlateElement,
  createPluginFactory,
  useElement,
} from "@udecode/plate-common";
import { useCallback, useEffect, useMemo, useState } from "react";
import { DATA_INPUT_ELEMENT } from "./DataInputKeys";
import type { DataInputElementType } from "./DataInputUtils";
import PlateTextInput from "./inputs/PlateTextInput";
import { formatISO } from "date-fns";
import PlateCheckBoxInput from "./inputs/PlateCheckBoxInput";
import type { CheckedState } from "@radix-ui/react-checkbox";
import PlateSelectInput from "./inputs/PlateSelectInput";
import PlateDateInput from "./inputs/PlateDateInput";
import PlateMultiSelect from "./inputs/PlateMultiSelect";
import type { FancyMultiSelectOptions } from "../../ui/FancyMultiSelect";

export const createDataInputPlugin = createPluginFactory({
  key: DATA_INPUT_ELEMENT,
  isElement: true,
  isInline: true,
  isVoid: true,
});

export function DataInputElement({
  className,
  children,
  ...props
}: PlateElementProps) {
  const element = useElement<DataInputElementType>();
  const [value, setValue] = useState(element.value ?? "");
  const [multiValue, setMultiValue] = useState<FancyMultiSelectOptions[]>([]);

  useEffect(() => {
    element.value = value;
    element.modifiedAt = formatISO(new Date());
  }, [element, value]);

  useEffect(() => {
    element.multiValues = multiValue;
    element.modifiedAt = formatISO(new Date());
  }, [element, multiValue]);

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    },
    [setValue]
  );

  const onCheckedChange = useCallback(
    (checked: CheckedState) => {
      setValue(Number(checked));
    },
    [setValue]
  );
  const onValueChange = useCallback(
    (value: string) => {
      setValue(value);
    },
    [setValue]
  );

  const input = useMemo(() => {
    switch (element.inputType) {
      case "text":
      case "number":
        return (
          <PlateTextInput element={element} onChange={onChange} value={value} />
        );
      case "checkbox":
        return (
          <PlateCheckBoxInput
            element={element}
            onCheckedChange={onCheckedChange}
            value={value as number}
          />
        );
      case "select":
        return (
          <PlateSelectInput
            element={element}
            onValueChange={onValueChange}
            value={value as string}
          />
        );
      case "date":
        return (
          <PlateDateInput element={element} onChange={onChange} value={value} />
        );
      case "multiple":
        return (
          <PlateMultiSelect
            element={element}
            onMultiValueChange={setMultiValue}
            value={multiValue}
          />
        );

      default:
        throw Error("unknown data type");
    }
  }, [element, multiValue, onChange, onCheckedChange, onValueChange, value]);

  return (
    <PlateElement
      asChild
      className={className}
      {...props}
      contentEditable={false}>
      <span>
        {input}
        {children}
      </span>
    </PlateElement>
  );
}
