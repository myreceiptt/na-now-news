import { format, parseISO } from "date-fns";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { Mdx } from "@/app/components/mdx";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";

type PostParams = { slug: string };

export const generateStaticParams = async () =>
  getAllPosts().map((post) => ({ slug: post.slug }));

export const generateMetadata = async ({
  params,
}: {
  params: PostParams | Promise<PostParams>;
}) => {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) throw new Error(`Post not found for slug: ${slug}`);
  return {
    metadataBase: new URL("https://news.bananow.land/"),
    title: {
      template: "%s | Na Now News of BANANOW.LAND", // Included on each child page
      default: post.title, // Title on each page
    },
    description: post.description, // Description for each page
    applicationName: "Na Now News of BANANOW.LAND",
    authors: [
      { name: post.penulis, url: post.link },
      // { name: "Prof. NOTA", url: "https://nota.endhonesa.com" },
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
      canonical: "/posts/" + `${slug}`, // Canonical for each page
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
      title: post.title, // Title on each page
      description: post.description, // Description for each page
      url: "https://news.bananow.land/posts/" + `${slug}`, // URL for each page
      siteName: "Na Now News of BANANOW.LAND",
      locale: "en-US",
      images: [
        {
          url: "https://news.bananow.land" + post.gambar, // Must be an absolute URL
          width: 1920,
          height: 1080,
          alt: post.title, // Alternate text for image
        },
        {
          url: "https://news.bananow.land" + post.gambar, // Must be an absolute URL
          width: 1800,
          height: 1600,
          alt: post.title, // Alternate text for image
        },
      ],
      type: "article", // Can be an "website" for the "type"
      publishedTime: post.date, // Only use this for "article"
      authors: [post.penulis], // Only use this for "article"
    },
    twitter: {
      card: "summary_large_image",
      siteId: "@bananow_land",
      creator: "@bananow_land",
      creatorId: "@bananow_land",
      title: post.title, // Title on each page
      description: post.description, // Description for each page
      images: ["https://news.bananow.land" + post.gambar], // Must be an absolute URL
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

const PostLayout = async ({
  params,
}: {
  params: PostParams | Promise<PostParams>;
}) => {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) throw new Error(`Post not found for slug: ${slug}`);

  return (
    <div className="flex flex-col gap-8 p-4 pb-20 sm:p-20">
      <Header />
      <main className="mx-auto max-w-3xl flex flex-col border-b border-dark-now dark:border-light-now">
        <article className="border-b border-dark-now dark:border-light-now pb-4">
          <Image
            src={post.gambar}
            alt={post.title}
            className="rounded-md mb-4 aspect-3/1 w-full h-full object-cover object-center"
            width={768}
            height={256}
            priority
          />
          <h2 className="text-xl sm:text-2xl font-judul text-green-now dark:text-yellow-now">
            {post.title}
          </h2>
          <time
            dateTime={post.date}
            className="block text-sm sm:text-base text-yellow-now dark:text-green-now font-judul"
          >
            {format(parseISO(post.date), "LLLL d, yyyy")}
          </time>
          <Mdx source={post.body} />
        </article>

        <h4 className="text-sm sm:text-base text-right mt-4">
          Author:{" "}
          <Link
            href={`${post.link}`}
            target="_blank"
            className="text-green-now dark:text-yellow-now hover:text-yellow-now dark:hover:text-green-now"
          >
            {post.penulis}
          </Link>
        </h4>
        <h5 className="text-sm sm:text-base text-right">
          Published under these categories:
        </h5>
        <div className="flex flex-wrap gap-2 justify-end mt-2 mb-8">
          {post.categories.map((category: string) => (
            <Link
              key={category}
              href={`/category/${category.toLowerCase()}`}
              className="bg-dark-now dark:bg-light-now text-light-now dark:text-dark-now px-4 py-1 rounded-full text-xs sm:text-sm hover:bg-yellow-now dark:hover:bg-green-now focus:bg-green-now dark:focus:bg-yellow-now hover:text-dark-now dark:hover:text-light-now focus:text-light-now dark:focus:text-dark-now"
            >
              {category}
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PostLayout;
