export const ENV: Record<string, string> = {
  NEXT_PUBLIC_SERVER_URL: process.env.NEXT_PUBLIC_SERVER_URL || "",
  NEXT_PUBLIC_API_KEY: process.env.NEXT_PUBLIC_API_KEY || "",
} as const;
