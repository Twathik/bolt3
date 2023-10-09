import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { InputMask } from "@react-input/mask";
import React, { forwardRef } from "react";
import { FieldValues, Path, UseFormReturn } from "react-hook-form";

const CustomDateInput = forwardRef<HTMLInputElement, any>(
  (props, forwardedRef) => {
    return <Input ref={forwardedRef} {...props} />;
  },
);

interface DateInputProps<T extends FieldValues> {
  form: UseFormReturn<T>;
  name: Path<T>;
  label: string;
  description?: string;
}

function AppDateInput<T extends FieldValues>({
  form,
  label,
  name,
  description,
}: DateInputProps<T>) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <InputMask
              {...field}
              component={CustomDateInput}
              mask="jj/mm/aaaa"
              replacement={{ j: /\d/, m: /\d/, a: /\d/ }}
              showMask
              separate
            />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default AppDateInput;
