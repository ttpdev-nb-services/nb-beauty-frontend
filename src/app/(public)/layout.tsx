import type { Metadata } from "next";

import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/client.css";

import { ThemeProvider } from "@/providers/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { QueryProvider } from "@/providers/query-provider";
import { Header } from "@/components/segments/header";
import { Footer } from "@/components/segments/footer";
import { ChildrenProps } from "@/types/default-props";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ngọc Bích Beauty Care",
  description: "Chăm sóc sắc đẹp với Ngọc Bích Beauty",
};
export default function RootLayout({ children }: Readonly<ChildrenProps>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster position="top-right" />
          <div className="w-full min-h-svh">
            <QueryProvider>
              <Header />
              <main className="h-screen px-4">{children}</main>
              <Footer />
            </QueryProvider>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
