import Link from "next/link";
import Image from "next/image";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";

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
    title: `${category} - Na Now News of BANANOW.LAND`,
    description: `Here we share Na Now News about ${category}. It can be crazy nothing or ordinary something. There are a lot of them. Let's dig in!`,
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
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <Image
          className="items-center"
          src="/images/logos/na-now-news.svg"
          alt="Na Now News Illustration"
          width={320}
          height={240}
          priority
        />
        <h1 className="text-3xl font-bold">Na Now {category}</h1>
        <div className="mx-auto max-w-2xl py-16">
          {posts.map((post) => (
            <div key={post._id} className="mb-8">
              <h2 className="mb-1 text-xl">
                <Link
                  href={post.url}
                  className="text-blue-700 hover:text-blue-900"
                >
                  {post.title}
                </Link>
              </h2>
              <time
                dateTime={post.date}
                className="mb-2 block text-xs text-gray-600"
              >
                {format(parseISO(post.date), "LLLL d, yyyy")}
              </time>
              <div className="text-sm">{post.description}</div>
              <div className="mt-2 flex flex-wrap gap-2">
                {post.categories.map((cat: string) => (
                  <Link
                    key={cat}
                    href={`/category/${cat.toLowerCase()}`}
                    className="text-sm text-blue-600 hover:underline"
                  >
                    {cat}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <div className="mt-12">
            <Link href="/" className="text-blue-700 hover:text-blue-900">
              ← Back to Home
            </Link>
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.bananow.land/base/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          On Market
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.bananow.land/basescan/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          On Basescan
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.bananow.land/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to The Land →
        </a>
      </footer>
    </div>
  );
}
