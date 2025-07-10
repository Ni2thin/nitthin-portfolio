import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";

const recoleta = localFont({
  src: "../public/fonts/Recoleta-Bold.ttf",
  variable: "--font-recoleta",
});

export const metadata: Metadata = {
  title: "Nitthin Kumar - Portfolio",
  description: "Full-stack developer and software engineer. Explore my projects, experience, and skills in web development, React, Next.js, and modern technologies.",
  keywords: ["portfolio", "developer", "full-stack", "React", "Next.js", "TypeScript", "web development"],
  authors: [{ name: "Nitthin Kumar" }],
  creator: "Nitthin Kumar",
  publisher: "Nitthin Kumar",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Nitthin Kumar - Portfolio",
    description: "Full-stack developer and software engineer. Explore my projects, experience, and skills in web development.",
    url: '/',
    siteName: "Nitthin Kumar Portfolio",
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Nitthin Kumar - Portfolio",
    description: "Full-stack developer and software engineer. Explore my projects, experience, and skills in web development.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
