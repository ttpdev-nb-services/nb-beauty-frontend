// Type for list category
export type TCategories = {
  id: number;
  name: string;
  slug: string;
  description: string;
  isActive: boolean;
};

// Type for each category
export type TCategory = {
  id: number;
  name: string;
  slug: string;
  description: string;
  isActive: boolean;
  parentId: number;
};
