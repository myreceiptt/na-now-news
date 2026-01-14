import { compareDesc } from "date-fns";
import { getAllPosts } from "@/lib/posts";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import PostList from "@/app/components/postlist";
import Pagination from "@/app/components/pagination";
import { notFound } from "next/navigation";

const POSTS_PER_PAGE = 4;

type CategoryParams = { category: string };

export const generateStaticParams = async () => {
  const allPosts = getAllPosts();
  const categories = Array.from(
    new Set(
      allPosts.flatMap((post) =>
        post.categories.map((cat) => cat.toLowerCase())
      )
    )
  );
  return categories.map((category) => ({ category }));
};

export const generateMetadata = async ({
  params,
}: {
  params: CategoryParams | Promise<CategoryParams>;
}) => {
  const { category: categoryParam } = await params;
  const category =
    categoryParam.charAt(0).toUpperCase() + categoryParam.slice(1);
  return {
    metadataBase: new URL("https://news.bananow.land/"),
    title: {
      template: "%s | Na Now News of BANANOW.LAND", // Included on each child page
      default: "Na Now " + `${category}`, // Title on each page
    },
    description:
      "Here we share Na Now News about " +
      `${category}` +
      ". It can be crazy " +
      `${category}` +
      " or ordinary " +
      `${category}` +
      ". There are a lot of " +
      `${category}` +
      ". Let's dig in!", // Description for each page
    applicationName: "Na Now News of BANANOW.LAND",
    authors: [
      { name: "BANANOW.LAND", url: "https://www.bananow.land" },
      { name: "Prof. NOTA", url: "https://nota.endhonesa.com" },
    ],
    manifest: "/manifest.webmanifest",
    generator: "BANANOW.LAND",
    keywords: [
      `${category}`,
      `${category}` + " News",
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
      canonical: "/category/" + `${categoryParam}`, // Canonical for each page
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
      title: "Na Now " + `${category}`, // Title on each page
      description:
        "Here we share Na Now News about " +
        `${category}` +
        ". It can be crazy " +
        `${category}` +
        " or ordinary " +
        `${category}` +
        ". There are a lot of " +
        `${category}` +
        ". Let's dig in!", // Description for each page
      url: "https://news.bananow.land/category/" + `${categoryParam}`, // URL for each page
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
      title: "Na Now " + `${category}`, // Title on each page
      description:
        "Hi, X People! Here we share Na Now News about " +
        `${category}` +
        ". It can be crazy " +
        `${category}` +
        " or ordinary " +
        `${category}` +
        ". There are a lot of " +
        `${category}` +
        ". Let's dig in!", // Description for each page
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

export default async function CategoryPage({
  params,
}: {
  params: CategoryParams | Promise<CategoryParams>;
}) {
  const { category: categoryParam } = await params;
  const category =
    categoryParam.charAt(0).toUpperCase() + categoryParam.slice(1);
  const filteredPosts = getAllPosts()
    .filter((post) =>
      post.categories.map((cat) => cat.toLowerCase()).includes(categoryParam)
    )
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  if (filteredPosts.length === 0) {
    notFound();
  }

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);

  return (
    <div className="flex flex-col gap-8 p-4 pb-20 sm:p-20">
      <Header />
      <main className="mx-auto max-w-3xl flex flex-col border-b border-dark-now dark:border-light-now">
        <h1
          id="top"
          className="text-2xl sm:text-3xl text-center font-judul w-full mb-8"
        >
          <span className="text-green-now dark:text-yellow-now">Na</span>{" "}
          <span className="text-yellow-now dark:text-green-now">Now</span>{" "}
          <span className="text-green-now dark:text-yellow-now">
            {category}
          </span>
        </h1>
        <PostList posts={filteredPosts.slice(0, POSTS_PER_PAGE)} />
        <h5 className="text-sm sm:text-base text-right mt-4">
          Let&apos;s dig into all the pages!
        </h5>
        <Pagination
          currentPage={1}
          totalPages={totalPages}
          basePath={`/category/${categoryParam}/`}
        />
      </main>
      <Footer />
    </div>
  );
}
