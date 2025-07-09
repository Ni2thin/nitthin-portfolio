import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";

const recoleta = localFont({
  src: "../public/fonts/Recoleta-Bold.ttf",
  variable: "--font-recoleta",
});

export const metadata: Metadata = {
  title: "Nitthin kumar",
  description: "Portfolio",
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32' }
    ],
    apple: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${recoleta.variable} antialiased`}>
        <main>
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  );
}
