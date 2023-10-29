import { Form } from "@/ui/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useEffect } from "react";
import type { FieldValues } from "react-hook-form";
import { useForm } from "react-hook-form";
import type { AppFormConfigurationInterface } from "./utils/AppBuilderBuilderPropsInterface";
import type { z } from "zod";
import AppInputBuilder from "./AppInputBuilder";
import { Button } from "@/ui/components/ui/button";
import { PaperAirplaneIcon, ArrowPathIcon } from "@heroicons/react/24/outline";
import { ScrollArea } from "@/ui/components/ui/scroll-area";

function AppFormBuilder<T extends FieldValues>({
  formSchema,
  defaultValues,
  onSubmit,
  inputs,
  loading,
  submitButton,
  onChangeSubmit,
  setIsValid,
  mode,
  reset,
}: AppFormConfigurationInterface<T>) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
    mode,
  });

  const data = form.watch();

  useEffect(() => {
    if (setIsValid) setIsValid(form.formState.isValid);
  }, [form.formState.isValid, setIsValid]);
  useEffect(() => {
    if (reset) form.reset();
  }, [form, reset]);

  useEffect(() => {
    if (
      form.formState.isValid &&
      !form.formState.isValidating &&
      onChangeSubmit
    ) {
      onSubmit(data);
    }
  }, [
    form.formState,
    data,
    form.formState.isValidating,
    onChangeSubmit,
    onSubmit,
  ]);
  const resetForm = useCallback(
    (e: any) => {
      e.preventDefault();
      form.reset();
    },
    [form]
  );

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="relative flex max-h-[90vh] flex-col space-y-8">
        <ScrollArea className="max-h-[85vh] w-full rounded-md border p-4 flex flex-col">
          {inputs.map((input) => AppInputBuilder({ form, input }))}
        </ScrollArea>
        <div className="flex flex-row gap-2">
          {reset !== undefined && (
            <Button onClick={resetForm} variant="destructive">
              Annuler
            </Button>
          )}

          {submitButton ?? (
            <Button type="submit" className="w-full" disabled={loading}>
              <>
                {loading ? (
                  <ArrowPathIcon className="mr-2 h-4 w-4" />
                ) : (
                  <PaperAirplaneIcon className="mr-2 h-4 w-4" />
                )}
                Valider
              </>
            </Button>
          )}
        </div>
      </form>
    </Form>
  );
}

export default AppFormBuilder;
