import Link from "next/link";
import Image from "next/image";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

export const generateStaticParams = async () => {
  const categories = Array.from(
    new Set(
      allPosts.flatMap((post) =>
        post.categories.map((cat) => cat.toLowerCase())
      )
    )
  );
  return categories.map((category) => ({ category }));
};

export const generateMetadata = ({
  params,
}: {
  params: { category: string };
}) => {
  const category =
    params.category.charAt(0).toUpperCase() + params.category.slice(1);
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
      { name: "Prof. NOTA", url: "https://nota.straight-line.org" },
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
      canonical: "/category/" + `${category}`, // Canonical for each page
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
      url: "https://news.bananow.land/category/" + `${category}`, // URL for each page
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

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const category =
    params.category.charAt(0).toUpperCase() + params.category.slice(1);

  const posts = allPosts
    .filter((post) =>
      post.categories.map((cat) => cat.toLowerCase()).includes(params.category)
    )
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  return (
    <div className="flex flex-col gap-8 p-4 pb-20 sm:p-20">
      <Header />
      <main className="mx-auto max-w-3xl flex flex-col items-center gap-8">
        <h1 className="text-2xl sm:text-3xl text-center font-judul border-b border-dark-now dark:border-light-now w-max">
          <span className="text-green-now dark:text-yellow-now">Na</span>{" "}
          <span className="text-yellow-now dark:text-green-now">Now</span>{" "}
          <span className="text-green-now dark:text-yellow-now">
            {category}
          </span>
        </h1>
        <ul className="border-b border-dark-now dark:border-light-now">
          {posts.map((post) => (
            <li key={post._id} className="mb-8">
              <Link href={post.url}>
                <Image
                  src={post.gambar}
                  alt={post.title}
                  className="rounded-md mb-4 aspect-[3/1] w-full h-full object-cover object-center hover:scale-105 transition-all ease duration-300"
                  width={768}
                  height={256}
                  priority
                />
              </Link>
              <h2 className="text-xl sm:text-2xl font-judul">
                <Link
                  href={post.url}
                  className="text-green-now dark:text-yellow-now hover:text-yellow-now dark:hover:text-green-now"
                >
                  {post.title}
                </Link>
              </h2>
              <time
                dateTime={post.date}
                className="block text-sm sm:text-base text-yellow-now dark:text-green-now font-judul"
              >
                {format(parseISO(post.date), "LLLL d, yyyy")}
              </time>
              <p className="text-sm sm:text-base">{post.description}</p>
              <div className="flex flex-wrap gap-2 justify-items-start mt-2 mb-8">
                {post.categories.map((cat: string) => (
                  <Link
                    key={cat}
                    href={`/category/${cat.toLowerCase()}`}
                    className="bg-dark-now dark:bg-light-now text-light-now dark:text-dark-now px-4 py-1 rounded-full text-xs sm:text-sm hover:bg-yellow-now dark:hover:bg-green-now focus:bg-green-now dark:focus:bg-yellow-now hover:text-dark-now dark:hover:text-light-now focus:text-light-now dark:focus:text-dark-now"
                  >
                    {cat}
                  </Link>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  );
}
