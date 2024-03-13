import "@repo/ui/globals.css";
import { ThemeProvider } from "@repo/ui/components/ui/theme-provider";
import Layout from "@repo/ui/components/ui/platformLayout";
import { Inter as FontSans } from "next/font/google";
import type { Metadata } from "next";
import { cn } from "@repo/ui/lib/utils";

type RootLayoutProps = {
  children: React.ReactNode;
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Pretty Faqs",
  description: "Make Faqs pretty again",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Layout>{children}</Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}
