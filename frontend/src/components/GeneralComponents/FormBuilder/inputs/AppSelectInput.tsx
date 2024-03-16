import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useMemo } from "react";
import type { FieldValues, UseFormReturn, Path } from "react-hook-form";

interface SelectInputProps<T extends FieldValues> {
  form: UseFormReturn<T>;
  name: Path<T>;
  label: string;
  description?: string;
  placeholder: string;
  options: { value: string; label: string }[];
}

function AppSelectInput<T extends FieldValues>({
  form,
  label,
  name,
  description,
  placeholder,
  options,
}: SelectInputProps<T>) {
  const SelectOptions = useMemo(
    () =>
      options.map((e) => (
        <SelectItem key={e.value} value={e.value}>
          {e.label}
        </SelectItem>
      )),
    [options]
  );
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>{SelectOptions}</SelectContent>
          </Select>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default AppSelectInput;
