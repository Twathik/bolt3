import { ReactNode } from "react";
import { FieldValues, UseFormReturn } from "react-hook-form";
import { AppInputBuilderPropsInterface } from "./utils/AppBuilderBuilderPropsInterface";
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
      return <AppTextInput key={input.name} {...input} form={form} />;
    case "number":
      return (
        <AppTextInput key={input.name} {...input} form={form} type="number" />
      );
    case "date":
      return <AppDateInput key={input.name} {...input} form={form} />;
    case "select":
      return <AppSelectInput key={input.name} {...input} form={form} />;

    default:
      return <div>Unknown Input type</div>;
  }
};

export default AppInputBuilder;
