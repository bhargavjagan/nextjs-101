import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "400", "500"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Next JS - 101",
  description: "Next JS application to understand next JS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}
