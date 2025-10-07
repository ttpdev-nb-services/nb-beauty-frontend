import { ENV } from "@/constants/env";

export function getEnv(key: string, defaultValue?: string): string {
  const value = ENV[key];

  if (value === undefined) {
    if (defaultValue !== undefined) return defaultValue;
    throw new Error(`Missing environment variable: ${key}`);
  }

  return value;
}

export function getBaseUrl() {
  if (typeof window !== "undefined") {
    return "";
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return "http://localhost:3000";
}
