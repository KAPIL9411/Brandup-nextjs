import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";


const font = Bricolage_Grotesque({ subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Brandup creatives",
  description: "Grow your business with Brandup Creatives, a modern marketing company.",
  openGraph: {
    images: [
      {
        url: 'https://brandupcreatives.in/logo/logo.webp',
        width: 1200,
        height: 630,
        alt: 'Brandup Logo',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>

        {children}
        <Analytics />

      </body>
    </html>
  );
}
