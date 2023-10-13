import { ReactNode } from "react";
import {
  DefaultValues,
  FieldValues,
  Path,
  UseFormReturn,
  ValidationMode,
} from "react-hook-form";
import { ZodType, z } from "zod";

interface RootAppInputBuilder<T extends FieldValues> {
  name: Path<T>;
  label: string;
  description?: string;
}

interface TextAppInput<T extends FieldValues> extends RootAppInputBuilder<T> {
  type: "text" | "number";
  placeholder: string;
}

interface DateAppInput<T extends FieldValues> extends RootAppInputBuilder<T> {
  type: "date";
}

interface SelectAppInput<T extends FieldValues> extends RootAppInputBuilder<T> {
  type: "select";
  placeholder: string;
  options: { value: string; label: string }[];
}

export type AppInputBuilderPropsInterface<T extends FieldValues> =
  | TextAppInput<T>
  | SelectAppInput<T>
  | DateAppInput<T>;

export interface AppFormConfigurationInterface<T extends FieldValues> {
  inputs: AppInputBuilderPropsInterface<T>[];
  formSchema: ZodType<T>;
  defaultValues: DefaultValues<T> | undefined;
  onSubmit: (values: z.infer<ZodType<T>>) => void;
  onChangeSubmit?: boolean;
  loading?: boolean;
  submitButton?: ReactNode;
  setIsValid?: React.Dispatch<React.SetStateAction<boolean>>;
  mode: keyof ValidationMode;
}
