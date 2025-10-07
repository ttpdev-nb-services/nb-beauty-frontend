import { ENV } from "@/constants/env";

export function getEnv(key: string, defaultValue?: string): string {
  const value = ENV[key];

  if (value === undefined) {
    if (defaultValue !== undefined) return defaultValue;
    throw new Error(`Missing environment variable: ${key}`);
  }

  return value;
}
