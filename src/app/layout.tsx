import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "ABC Kindergarten | Where Learning Begins with Love",
  description: "Nurturing curiosity, creativity, and confidence in every child through joyful early learning experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <body>{children}</body>
    </html>
  );
}
