import z from "zod";

export const createDefaultValues = {
  name: "",
  slug: "",
  description: "",
  active: false,
  parentId: null,
};

export const createCategorySchema = z.object({
  name: z
    .string()
    .nonempty({ error: "Tên danh mục không được để trống" })
    .max(150, "Tên danh mục quá dài"),
  slug: z.string().nullable(),
  description: z.string().max(255, "Mô tả quá dài").nullable(),
  active: z.boolean(),
  parentId: z
    .number()
    .nullable()
    .optional()
    .transform((val) => val ?? null),
});

export const updateCategorySchema = z.object({
  name: z
    .string()
    .nonempty({ error: "Tên danh mục không được để trống" })
    .max(150, "Tên danh mục quá dài"),
  slug: z.string().nullable(),
  description: z.string().max(255, "Mô tả quá dài").nullable(),
  active: z.boolean(),
  parentId: z
    .number()
    .nullable()
    .optional()
    .transform((val) => val ?? null),
});

export type TCreateCategoryForm = z.infer<typeof createCategorySchema>;
export type TUpdateCategoryForm = z.infer<typeof updateCategorySchema>;
