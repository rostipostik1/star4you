import type { Metadata } from "next";
import {Inter, Oswald, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
});

const oswald = Oswald({
  variable: "--font-oswald",
});

const manrope = Manrope({
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Star4You",
  description: "Star4You servise selebrety",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${oswald.variable} ${manrope.variable} antialiased`}
      >
        <main>
          {children}
        </main>
        
      </body>
    </html>
  );
}
