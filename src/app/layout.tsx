import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Business project"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex justify-center">
        {children}
      </body>
    </html>
  );
}
