import type { TDescendant } from "@udecode/plate-common";
import type { DATA_INPUT_ELEMENT } from "./DataInputKeys";
import type { DocumentHeaderTypes } from "../Documents/DocumentHeaderUtils";
import type { CheckedState } from "@radix-ui/react-checkbox";
import type { FancyMultiSelectOptions } from "../../ui/FancyMultiSelect";

export type PlateInputTypes =
  | "text"
  | "date"
  | "checkbox"
  | "number"
  | "select"
  | "multiple";

export type DataInputElementType = {
  type: typeof DATA_INPUT_ELEMENT;
  children: TDescendant[];
  metaData?: { [key: string]: any };
  value: string | number;
  multiValues?: FancyMultiSelectOptions[];
  placeholder?: "";
  modifiedAt?: string;
  inputType: PlateInputTypes;
  documentType: DocumentHeaderTypes;
  inputName: string;
  className?: string;
  label?: string;
  options?: { value: string; label: string }[];
};

export type DataInputProps = {
  element: DataInputElementType;
};

export type DataTextInputProps = DataInputProps & {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
};

export type DataCheckBoxInputProps = DataInputProps & {
  onCheckedChange: (checked: CheckedState) => void;
  value: number;
};

export type DataSelectInputProps = DataInputProps & {
  onValueChange: (value: string) => void;
  value: string;
};

export type MultiSelectInputProps = DataInputProps & {
  onMultiValueChange: React.Dispatch<
    React.SetStateAction<FancyMultiSelectOptions[]>
  >;
  value: FancyMultiSelectOptions[];
};