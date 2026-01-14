import { getAllPosts } from "@/lib/posts";
import { compareDesc } from "date-fns";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import PostList from "@/app/components/postlist";
import Pagination from "@/app/components/pagination";
import { notFound } from "next/navigation";
import { redirect } from "next/navigation";

const POSTS_PER_PAGE = 4;

type PageParams = { page: string };

export const generateStaticParams = async () => {
  const allPosts = getAllPosts();
  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);
  return Array.from({ length: totalPages - 1 }, (_, i) => ({
    page: `${i + 2}`,
  }));
};

export const generateMetadata = async ({
  params,
}: {
  params: PageParams | Promise<PageParams>;
}) => {
  const { page } = await params;
  return {
    metadataBase: new URL("https://news.bananow.land/"),
    title: {
      template: "%s | Na Now News of BANANOW.LAND", // Included on each child page
      default: "Na Now News Page " + `${page}`, // Title on each page
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
      canonical: "/" + `${page}`, // Canonical for each page
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
      default: "Na Now News Page " + `${page}`, // Title on each page
      description:
        "Here we share whatever we have done. It can be crazy nothing or ordinary something. There are a lot of them. Let's dig in!", // Description on each page
      url: "https://news.bananow.land/" + `${page}`, // URL for each page
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
      default: "Na Now News Page " + `${page}`, // Title on each page
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
};

export default async function HomePage({
  params,
}: {
  params: PageParams | Promise<PageParams>;
}) {
  const { page } = await params;
  const currentPage = Number(page);
  const sortedPosts = getAllPosts().sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );
  const totalPosts = sortedPosts.length;
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);

  // Check if the page parameter is a valid number
  if (isNaN(currentPage)) {
    notFound();
  }

  if (currentPage < 1) {
    redirect("/"); // Redirect to the first page
  }

  if (currentPage > totalPages) {
    redirect(`/${totalPages}`); // Redirect to the last page
  }

  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = sortedPosts.slice(startIndex, endIndex);

  return (
    <div className="flex flex-col gap-8 p-4 pb-20 sm:p-20">
      <Header />
      <main className="mx-auto max-w-3xl flex flex-col border-b border-dark-now dark:border-light-now">
        <PostList posts={currentPosts} />
        <h5 className="text-sm sm:text-base text-right mt-4">
          Let&apos;s dig into all the pages!
        </h5>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          basePath="./"
        />
      </main>
      <Footer />
    </div>
  );
}
