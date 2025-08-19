import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { UiProvider } from "@repo/ui";
import "./globals.css";
import { InstructionsDrawer } from "@/components/instructions";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "upvote | cobuild",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💬</text></svg>"
      />
      <body className={inter.className}>
        <UiProvider>
          {children}
          <InstructionsDrawer />
        </UiProvider>
      </body>
    </html>
  );
}
