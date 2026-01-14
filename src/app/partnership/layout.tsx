import React from "react";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://news.bananow.land/"),
  title: {
    template: "%s | Na Now News of BANANOW.LAND", // Included on each child page
    default: "Partnership with Na Now News", // Title on each page
  },
  description:
    "Here you can share whatever you have done. It can be crazy nothing or ordinary something. Surely, there are a lot of them in your mind. Let's work together!", // Description for each page
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
    canonical: "/partnership", // Canonical for each page
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
export default function PartnerShipLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col gap-8 p-4 pb-20 sm:p-20">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
