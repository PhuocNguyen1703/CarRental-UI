import type { Metadata } from "next";
import { poppins, roboto } from "@/utils/fonts";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Car Rental",
  description: "Car rental service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} ${poppins.variable}`}>
        {children}
      </body>
    </html>
  );
}
