import { format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import { Mdx } from "@/app/components/mdx";
import Link from "next/link";
import Image from "next/image";

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);
  return { title: post.title, description: post.description };
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);

  // const Content = getMDXComponent(post.body.code);

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
        <h1 className="text-3xl font-bold font-[family-name:var(--font-judul)]">
          {post.title}
        </h1>
        <div className="flex gap-2 items-center flex-wrap justify-center">
          {post.categories.map((category: string) => (
            <Link
              key={category}
              href={`/category/${category.toLowerCase()}`}
              className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm hover:bg-blue-200"
            >
              {category}
            </Link>
          ))}
        </div>
        <time dateTime={post.date} className="text-sm text-gray-600">
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </time>
        <article className="mx-auto max-w-2xl">
          <Mdx code={post.body.code} />
          <div className="mt-12">
            <Link href="/" className="text-blue-700 hover:text-blue-900">
              ← Back to Home
            </Link>
          </div>
        </article>
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
};

export default PostLayout;
