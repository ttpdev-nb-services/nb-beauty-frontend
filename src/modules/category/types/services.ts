// For property have type boolean then remove "is" , only defind isActive -> active
export type TCreateCategoryRequest = {
  name: string;
  active: boolean;
  description: string | null;
  parentId: number | null;
  slug: string | null;
};

export type TUpdateCategoryRequest = {
  name: string;
  active: boolean;
  description: string | null;
  parentId: number | null;
  slug: string | null;
};
