import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Spray-tech",
  description: "Spray-tech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  );
}
