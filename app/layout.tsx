import "./globals.css";
import type { Metadata } from "next";
import { defaultMeta } from "./seo";

export const metadata: Metadata = {
  title: defaultMeta.title,
  description: defaultMeta.description,
  keywords: defaultMeta.keywords,
  openGraph: {
    title: defaultMeta.title,
    description: defaultMeta.description,
    url: defaultMeta.url,
    siteName: "Tags Express",
    images: [
      {
        url: defaultMeta.image,
        width: 1200,
        height: 630,
        alt: "Tags Express - Pain-Free DMV Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: defaultMeta.title,
    description: defaultMeta.description,
    images: [defaultMeta.image],
    creator: "@tagsexpress",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}