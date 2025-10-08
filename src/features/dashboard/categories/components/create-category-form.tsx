"use client";

import { SelectField, TextField } from "@/components/react-hook-forms/fields";
import { SwitchField } from "@/components/react-hook-forms/fields/switch-field";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldSet,
} from "@/components/ui/field";
import {
  createCategorySchema,
  createDefaultValues,
  TCreateCategoryForm,
} from "@/modules/category/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { categoryCommands } from "../commands";
import { Loading } from "@/components/loading";
import { useNavigate } from "@/hooks/use-navigate";
import { useCategoryOptions } from "../hooks/use-category-options";
import { BASE_ROUTE } from "@/constants/route";
import { AxiosError } from "axios";
import { ApiValidationResponse } from "@/interfaces/api.interface";

export const CreateCategoryForm = () => {
  const { handleNavigate } = useNavigate();
  const { mutate, isPending } = categoryCommands.useCreateCategory();
  const { categoriesOptions } = useCategoryOptions();

  const form = useForm({
    defaultValues: createDefaultValues,
    shouldUnregister: false,
    resolver: zodResolver(createCategorySchema),
  });

  const handleSubmit = form.handleSubmit((values) => {
    console.log(values);

    mutate(values, {
      onSuccess: () => {
        handleNavigate(BASE_ROUTE.categories.base);
      },
      onError: (error: AxiosError) => {
        console.log(error.response?.data);

        const errors = error.response?.data as ApiValidationResponse;

        if (typeof errors.errors === "object") {
          Object.entries(errors).forEach(([field, message]) => {
            const safeMessage =
              (typeof message === "string" ? message : "") || "";
            form.setError(field as keyof TCreateCategoryForm, {
              type: "server",
              message: safeMessage,
            });
          });
        }
      },
    });
  });
  const handleClose = () => {
    handleNavigate(BASE_ROUTE.categories.base);
  };
  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit}>
        <FieldGroup>
          <FieldSet>
            <FieldGroup>
              <Field>
                <TextField
                  placeholder="Nhập tên danh mục"
                  name="name"
                  label="Tên danh mục"
                  required
                />
                <FieldDescription>
                  Mỗi danh mục cha sẽ đại diện cho một cấp của danh mục (Có 1,
                  2, 3 cấp)
                </FieldDescription>
              </Field>
              <Field>
                <TextField placeholder="Nhập slug" name="slug" label="Slug" />
                <FieldDescription>
                  Slug sẽ được hiển thị trên URL của người dùng để SEO tốt
                </FieldDescription>
              </Field>
              <Field>
                <SelectField
                  type="number"
                  placeholder="Chọn danh mục cha"
                  name="parentId"
                  label="Danh mục cha"
                  options={categoriesOptions()}
                />
              </Field>
              <Field>
                <TextField name="description" label="Mô tả" />
                <FieldDescription>
                  Viết mô tả về danh mục để khách hàng có thể hình dung và biết
                  từng hạng mục sản phẩm hoặc dịch vụ
                </FieldDescription>
              </Field>
              <Field>
                <SwitchField name="active" label="Mô tả" />
                <FieldDescription>Ẩn/hiện danh mục</FieldDescription>
              </Field>
            </FieldGroup>
          </FieldSet>
          <Field orientation="horizontal">
            <Button disabled={isPending} type="submit">
              {isPending ? <Loading text="Đang tạo..." /> : "Thêm mới"}
            </Button>
            <Button onClick={handleClose} variant="outline" type="button">
              Huỷ
            </Button>
          </Field>
        </FieldGroup>
      </form>
    </FormProvider>
  );
};
