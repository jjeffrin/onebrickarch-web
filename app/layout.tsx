import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "One Brick Architects",
  description: "Discover innovative architectural designs tailored to your vision. One Brick Architects specializes in creating sustainable, modern, and functional spaces for residential, commercial, and urban projects. Explore our portfolio and transform your ideas into reality.",
  keywords: [
    "architects",
    "one brick",
    "one brick studio",
    "onebrick studio",
    "onebrick architects",
    "one brick architects",
    "architectural design",
    "modern architecture",
    "sustainable buildings",
    "residential architects",
    "commercial architecture",
    "urban planning",
    "eco-friendly design",
    "custom home designs",
    "interior architecture"
  ],
  authors: [{ name: "One Brick Architects", url: "https://onebrickarchitects.com" }],
  creator: "One Brick Architects",
  publisher: "One Brick Architects",
  robots: "index, follow",
  openGraph: {
    title: "One Brick Architects | Innovative & Sustainable Designs",
    description:
      "Transform your vision into reality with One Brick Architects. Explore modern, sustainable, and functional architectural solutions for residential, commercial, and urban spaces.",
    url: "https://onebrickarchitects.com",
    siteName: "One Brick Architects",
    images: [
      {
        url: "https://onebrickarchitects.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "One Brick Architects - Sustainable & Modern Architecture"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "One Brick Architects | Innovative & Sustainable Designs",
    description:
      "Explore modern, sustainable, and functional architecture with One Brick Architects. Transform your vision into reality with our expert designs.",
    images: ["https://onebrickarchitects.com/og-image.jpg"],
    site: "@OneBrickArch",
    creator: "@OneBrickArch"
  },
  alternates: {
    canonical: "https://onebrickarchitects.com"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.className} antialiased bg-slate-50`}
      >
        {/* Navbar */}
        <Navbar />

        {/* main content */}
        {children}

        {/* footer */}
        <Footer />
      </body>
    </html>
  );
}
