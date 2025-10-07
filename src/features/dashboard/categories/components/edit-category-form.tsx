import { SelectField, TextField } from "@/components/react-hook-forms/fields";
import { SwitchField } from "@/components/react-hook-forms/fields/switch-field";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldSet,
} from "@/components/ui/field";
import { Spinner } from "@/components/ui/spinner";
import {
  TUpdateCategoryForm,
  updateCategorySchema,
} from "@/modules/category/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { categoryCommands } from "../commands";
import { useCategoryOptions } from "../hooks/use-category-options";
import { useNavigate } from "@/hooks/use-navigate";
import { BASE_ROUTE } from "@/constants/route";
import { AxiosError } from "axios";
import { ApiValidationResponse } from "@/interfaces/api.interface";

type EditCategoryFormProps = {
  id: number;
  defaultValues: TUpdateCategoryForm | undefined;
};

export const EditCategoryForm = ({
  defaultValues,
  id,
}: EditCategoryFormProps) => {
  const { mutate, isPending } = categoryCommands.useUpdateCategory(id);
  const { categoriesOptions } = useCategoryOptions();
  const { handleNavigate } = useNavigate();

  const form = useForm({
    defaultValues: defaultValues,
    shouldUnregister: false,
    resolver: zodResolver(updateCategorySchema),
  });

  const handleSubmit = form.handleSubmit((values) => {
    mutate(values, {
      onError: (error: AxiosError) => {
        console.log(error.response?.data);

        const errors = error.response?.data as ApiValidationResponse;

        if (typeof errors.errors === "object") {
          Object.entries(errors).forEach(([field, message]) => {
            const safeMessage =
              (typeof message === "string" ? message : "") || "";
            form.setError(field as keyof TUpdateCategoryForm, {
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
                  searchPlaceholder="Tìm kiếm danh mục"
                  options={categoriesOptions(Number(id))}
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
                <SwitchField name="isActive" label="Mô tả" />
                <FieldDescription>Ẩn/hiện danh mục</FieldDescription>
              </Field>
            </FieldGroup>
          </FieldSet>
          <Field orientation="horizontal">
            <Button disabled={isPending} type="submit">
              {isPending ? (
                <div className="flex items-center gap-2">
                  <Spinner />
                  Đang cập nhật
                </div>
              ) : (
                "Cập nhật"
              )}
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
