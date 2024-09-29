import { format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import { Mdx } from "@/app/components/mdx";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";

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
    <div className="flex flex-col gap-8 p-8 pb-20 sm:p-20">
      <Header />
      <main className="mx-auto max-w-3xl flex flex-col items-center gap-8">
        <article className="border-b border-dark-now dark:border-light-now">
          <Image
            src={post.gambar}
            alt={post.title}
            className="rounded-md mb-4"
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
          <Mdx code={post.body.code} />
          <h4 className="text-sm sm:text-base mt-4">
            Author:{" "}
            <Link
              href={`${post.link}`}
              className="text-green-now dark:text-yellow-now hover:text-yellow-now dark:hover:text-green-now"
            >
              {post.penulis}
            </Link>
          </h4>
          <h5 className="text-sm sm:text-base mt-1">
            Published under these categories:
          </h5>
          <div className="flex flex-wrap gap-2 justify-items-start mt-2 mb-8">
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
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default PostLayout;
