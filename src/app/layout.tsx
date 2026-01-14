import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const fontJudul = localFont({
  src: "./fonts/moongloss/MoonGlossDisplayMedium.otf",
  variable: "--font-judul",
  weight: "900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://news.bananow.land/"),
  title: {
    template: "%s | Na Now News of BANANOW.LAND", // Included on each child page
    default: "Na Now News of BANANOW.LAND", // Title on each page
  },
  description:
    "Here we share whatever we have done. It can be crazy nothing or ordinary something. There are a lot of them. Let's dig in!", // Description for each page
  applicationName: "Na Now News of BANANOW.LAND",
  authors: [
    { name: "BANANOW.LAND", url: "https://www.bananow.land" },
    { name: "Prof. NOTA", url: "https://nota.endhonesa.com" },
  ],
  manifest: "/manifest.webmanifest",
  generator: "BANANOW.LAND",
  keywords: [
    "Web3 News",
    "BANANOW LAND NFTs",
    "NFTs Project",
    "Web3 Development",
    "Base Blockchain",
    "Decentralized Organization",
    "Fungible Token",
    "Non-Fungible Token",
    "NFT",
    "Decentralized Finance",
    "DAO",
    "Web3 Community",
    "NFT Community",
    "Web3 Education",
    "Blockchain Education",
    "Web3 Business",
    "Blockchain Business",
    "Web3 Gaming",
    "Blockchain Gaming",
    "Web3 Markets",
    "Blockchain Markets",
  ],
  referrer: "origin-when-cross-origin",
  creator: "BANANOW.LAND",
  publisher: "BANANOW.LAND",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/", // Canonical for each page
    // languages: {
    //   // Only used when billingual page provided
    //   "en-US": "/en-US",
    //   "id-ID": "/id-ID",
    // },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Na Now News of BANANOW.LAND", // Title on each page
    description:
      "Here we share whatever we have done. It can be crazy nothing or ordinary something. There are a lot of them. Let's dig in!", // Description on each page
    url: "https://news.bananow.land/", // URL for each page
    siteName: "Na Now News of BANANOW.LAND",
    locale: "en-US",
    images: [
      {
        url: "https://news.bananow.land/images/logos/na-now-news.svg", // Must be an absolute URL
        width: 1920,
        height: 1080,
        alt: "Na Now News Illustration", // Alternate text for image
      },
      {
        url: "https://news.bananow.land/images/logos/na-now-news.svg", // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: "Na Now News Illustration", // Alternate text for image
      },
    ],
    type: "website", // Can be an "article" for the "type"
    // publishedTime: '2024-02-29T00:00:00.000Z', // Only use this for "article"
    // authors: ['Seb', 'Josh'], // Only use this for "article"
  },
  twitter: {
    card: "summary_large_image",
    siteId: "@bananow_land",
    creator: "@bananow_land",
    creatorId: "@bananow_land",
    title: "Na Now News of BANANOW.LAND", // Title on each page
    description:
      "Hi, X People! Here we share whatever we have done. It can be crazy nothing or ordinary something. There are a lot of them. Let's dig in!", // Description on each page
    images: ["https://news.bananow.land/images/logos/na-now-news.svg"], // Must be an absolute URL
  },
  icons: {
    shortcut: "/favicon/favicon.ico",
    icon: "/favicon/favicon-32x32.png",
    apple: "/favicon/apple-touch-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/favicon/apple-touch-icon.png",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${fontJudul.variable} font-inter`}>
        <Analytics />
        {children}
      </body>
    </html>
  );
}
