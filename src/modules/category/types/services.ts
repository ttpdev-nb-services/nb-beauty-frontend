export type TCreateCategoryRequest = {
  name: string;
  isActive: boolean;
  description: string | null;
  parentId: number | null;
  slug: string | null;
};

export type TUpdateCategoryRequest = {
  name: string;
  isActive: boolean;
  description: string | null;
  parentId: number | null;
  slug: string | null;
};
