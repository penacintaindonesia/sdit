import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Baloo_2 } from "next/font/google";
import "./globals.css";
import { school } from "@/config/school";

const body = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const display = Baloo_2({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

export const viewport: Viewport = {
  themeColor: "#0B4F9C",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: school.seo.title,
  description: school.seo.description,
  applicationName: school.name,
  keywords: ["SDIT", "sekolah islam terpadu", "PPDB", "tahfidz", school.name],
  icons: { icon: school.favicon, apple: school.favicon },
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: school.name,
    title: school.seo.title,
    description: school.seo.description,
    images: [{ url: school.seo.ogImage, width: 1200, height: 630, alt: school.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: school.seo.title,
    description: school.seo.description,
    images: [school.seo.ogImage],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${body.variable} ${display.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
