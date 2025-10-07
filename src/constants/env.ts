export const ENV: Record<string, string> = {
  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || "",
} as const;
