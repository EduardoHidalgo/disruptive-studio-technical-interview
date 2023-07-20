import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Disruptive Studio Technical Test",
  description:
    "Crypto Finance application that allows you to calculate the return on investment",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${rubik.className} "h-full"`}>
      <body className="bg-background flex flex-col min-h-screen">
        {children}
      </body>
    </html>
  );
}
