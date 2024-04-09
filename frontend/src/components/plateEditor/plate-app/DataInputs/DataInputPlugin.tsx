import type { PlateElementProps } from "@udecode/plate-common";
import {
  PlateElement,
  createPluginFactory,
  findNodePath,
  useEditorRef,
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
import type { FancyMultiSelectOptions } from "@/components/ui/FancyMultiSelect";

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
  const editor = useEditorRef();
  const element = useElement<DataInputElementType>();
  const [value, setValue] = useState(element.value ?? "");
  const [multiValues, setMultiValues] = useState<FancyMultiSelectOptions[]>(
    element.multiValues ?? []
  );
  const [dirty, setDirty] = useState(false);

  useEffect(() => {
    const path = findNodePath(editor, element);

    if (path && dirty)
      editor.apply({
        type: "set_node",
        path: [...path],
        properties: {},
        newProperties: {
          value: value,
          modifiedAt: formatISO(new Date()),
        },
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editor, value]);

  useEffect(() => {
    const path = findNodePath(editor, element);

    if (path && element.inputType === "multiple" && dirty) {
      editor.apply({
        type: "set_node",
        path,
        properties: {},
        newProperties: {
          multiValues,
          modifiedAt: formatISO(new Date()),
        },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editor, multiValues]);

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setDirty(true);
      setValue(e.target.value);
    },
    [setValue]
  );

  const onCheckedChange = useCallback(
    (checked: CheckedState) => {
      setDirty(true);
      setValue(Number(checked));
    },
    [setValue]
  );
  const onValueChange = useCallback(
    (value: string) => {
      setDirty(true);
      setValue(value);
    },
    [setValue]
  );
  const onMultiSelectChange = useCallback(
    (value: FancyMultiSelectOptions[]) => {
      setDirty(true);
      setMultiValues(value);
    },
    [setMultiValues]
  );

  const input = useMemo(() => {
    switch (element.inputType) {
      case "text":
      case "number":
        return <PlateTextInput element={element} onChange={onChange} />;
      case "checkbox":
        return (
          <PlateCheckBoxInput
            element={element}
            onCheckedChange={onCheckedChange}
          />
        );
      case "select":
        return (
          <PlateSelectInput element={element} onValueChange={onValueChange} />
        );
      case "date":
        return <PlateDateInput element={element} onChange={onChange} />;
      case "multiple":
        return (
          <PlateMultiSelect
            element={element}
            onMultiValueChange={onMultiSelectChange}
          />
        );

      default:
        throw Error("unknown data type");
    }
  }, [element, onChange, onCheckedChange, onMultiSelectChange, onValueChange]);

  return (
    <PlateElement
      asChild
      className={className}
      {...props}
      contentEditable={false}
    >
      <span>
        {input}
        {children}
      </span>
    </PlateElement>
  );
}
