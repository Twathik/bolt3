import type { ReactNode } from "react";
import type { FieldValues, UseFormReturn } from "react-hook-form";
import type { AppInputBuilderPropsInterface } from "./utils/AppBuilderBuilderPropsInterface";
import AppDateInput from "../inputs/AppDateInput";
import AppSelectInput from "../inputs/AppSelectInput";
import AppTextInput from "../inputs/AppTextInput";

interface AppInputBuilder<T extends FieldValues> {
  input: AppInputBuilderPropsInterface<T>;
  form: UseFormReturn<T>;
}
const AppInputBuilder = <T extends FieldValues>({
  form,
  input,
}: AppInputBuilder<T>): ReactNode => {
  const { type } = input;
  switch (type) {
    case "text":
      return (
        <div className="p-1" key={input.name}>
          <AppTextInput {...input} form={form} />
        </div>
      );
    case "number":
      return (
        <div className="p-1" key={input.name}>
          <AppTextInput {...input} form={form} type="number" />
        </div>
      );
    case "date":
      return (
        <div className="p-1" key={input.name}>
          <AppDateInput {...input} form={form} />
        </div>
      );
    case "select":
      return (
        <div className="p-1" key={input.name}>
          <AppSelectInput {...input} form={form} />
        </div>
      );

    default:
      return <div>Unknown Input type</div>;
  }
};

export default AppInputBuilder;
