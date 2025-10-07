// Type for list category
export type TCategories = {
  id: number;
  name: string;
  slug: string;
  description: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
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
