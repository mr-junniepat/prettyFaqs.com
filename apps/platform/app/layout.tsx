import "@repo/ui/globals.css";

import { ThemeProvider } from "@repo/ui/components/ui/theme-provider";
import { Inter as FontSans } from "next/font/google";
import type { Metadata } from "next";
import { cn } from "@repo/ui/lib/utils";

import SessionProvider from "@platform/app/utils/sessionProvider";
import { auth } from "@platform/auth";

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

export default async function RootLayout({ children }: RootLayoutProps) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
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
            {children}
          </ThemeProvider>
        </body>
      </html>
    </SessionProvider>
  );
}
