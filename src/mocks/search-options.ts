import { OptionItem } from "@/types/default-props";

export const MOCK_OPTIONS: OptionItem[] = Array.from(
  { length: 50 },
  (_, i) => ({
    value: `option-${i + 1}`,
    label: `Option ${i + 1}`,
  }),
);

export const mockSearchOptions = async (
  query: string,
): Promise<OptionItem[]> => {
  console.log("Mock API call with query:", query);

  await new Promise((resolve) => setTimeout(resolve, 500));

  if (!query) return MOCK_OPTIONS;

  return MOCK_OPTIONS.filter((item) =>
    item.value.toLowerCase().includes(query.toLowerCase()),
  );
};
