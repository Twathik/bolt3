"use client";

import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { AppFormConfigurationInterface } from "./utils/AppBuilderBuilderPropsInterface";
import { z } from "zod";
import AppInputBuilder from "./AppInputBuilder";
import { Button } from "@/components/ui/button";
import { PaperAirplaneIcon, ArrowPathIcon } from "@heroicons/react/24/outline";
import { useWindowScroll } from "@mantine/hooks";
import { ScrollArea } from "@/components/ui/scroll-area";

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
}: AppFormConfigurationInterface<T>) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
    mode,
  });

  const data = form.watch();
  const [scroll, scrollTo] = useWindowScroll();

  useEffect(() => {
    if (setIsValid) setIsValid(form.formState.isValid);
  }, [form.formState.isValid]);

  useEffect(() => {
    if (
      form.formState.isValid &&
      !form.formState.isValidating &&
      onChangeSubmit
    ) {
      onSubmit(data);
    }
  }, [form.formState, data, form.formState.isValidating]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="relative flex max-h-[90vh] flex-col space-y-8"
      >
        <ScrollArea>
          <section className="relative max-h-full flex-1 ">
            {inputs.map((input) => AppInputBuilder({ form, input }))}
          </section>
        </ScrollArea>

        {submitButton ?? (
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? (
              <ArrowPathIcon className="mr-2 h-4 w-4" />
            ) : (
              <PaperAirplaneIcon className="mr-2 h-4 w-4" />
            )}
            Valider
          </Button>
        )}
      </form>
    </Form>
  );
}

export default AppFormBuilder;
