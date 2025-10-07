"use client";

import { FormProvider, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { TextField } from "@/components/react-hook-forms/fields/text-field";
import { Loading } from "@/components/loading";
import { subscribeCommands } from "../commands";
import { schemas, TEmailSubscribeSchema } from "@/modules/subscribe/schemas";
import { AxiosError } from "axios";
import { ApiValidationResponse } from "@/interfaces/api.interface";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { zodResolver } from "@hookform/resolvers/zod";
export const EmailSubscribe = () => {
  const { mutate, isPending } = subscribeCommands.useEmailSubscribe();

  const form = useForm({
    defaultValues: {
      email: "",
    },
    resolver: zodResolver(schemas),
  });

  const handleSubmit = form.handleSubmit((values: TEmailSubscribeSchema) => {
    if (!values) return;
    mutate(
      {
        email: values.email,
      },
      {
        onError: (error: AxiosError) => {
          const errors = error.response?.data as ApiValidationResponse;

          if (typeof errors.errors === "object") {
            Object.entries(errors.errors).forEach(([field, message]) => {
              const safeMessage =
                (typeof message === "string" ? message : "") || "";
              form.setError(field as keyof TEmailSubscribeSchema, {
                type: "server",
                message: safeMessage,
              });
            });
          }
        },
      },
    );
  });

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit}>
        <FieldGroup className="gap-4">
          <FieldLabel className="text-label">Nhận ưu đãi qua E-mail</FieldLabel>
          <div className="grid grid-cols-5 place-items-center gap-4">
            <Field className="col-span-4 text-label">
              <TextField
                name="email"
                placeholder="Nhập E-mail để nhận được tin tức về ưu đãi"
                className="text-sm rounded-tiny h-12 text-zinc-300 border-zinc-400"
              />
            </Field>
            <Field className="col-span-1">
              <Button
                disabled={isPending}
                type="submit"
                variant={"secondary"}
                className="h-12 max-mobile:w-full text-sm border-none rounded-tiny cursor-pointer text-foreground"
              >
                {isPending ? <Loading text="Đang xử lý" /> : "Đăng ký ngay"}
              </Button>
            </Field>
          </div>
        </FieldGroup>
      </form>
    </FormProvider>
  );
};
