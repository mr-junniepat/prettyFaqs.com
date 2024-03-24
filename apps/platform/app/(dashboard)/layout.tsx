import "@repo/ui/globals.css";
import { ThemeProvider } from "@repo/ui/components/ui/theme-provider";
import Layout from "@repo/ui/components/ui/platformLayout";
import { Inter as FontSans } from "next/font/google";
import type { Metadata } from "next";
import { cn } from "@repo/ui/lib/utils";
import { auth } from "@platform/auth";
import { logout } from "../actions/signout";

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
  const session: any = await auth();
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <Layout user={session} SignOut={logout}>
        {children}
      </Layout>
    </ThemeProvider>
  );
}
