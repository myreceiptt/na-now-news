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
    <div className="flex flex-col gap-8 p-8 pb-20 sm:p-20">
      <Header />
      <main className="mx-auto max-w-3xl flex flex-col items-center gap-8">
        <h1 className="text-2xl sm:text-3xl text-center font-judul border-b border-dark-now dark:border-light-now w-max">
          <span className="text-green-now dark:text-yellow-now">Na</span>{" "}
          <span className="text-yellow-now dark:text-green-now">Now</span>{" "}
          <span className="text-green-now dark:text-yellow-now">{category}</span>
        </h1>
        <ul className="border-b border-dark-now dark:border-light-now">
          {posts.map((post) => (
            <li key={post._id} className="mb-8">
              <Link href={post.url}>
                <Image
                  src={post.gambar}
                  alt={post.title}
                  className="rounded-md mb-4"
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
