import Image from "next/image";
import Link from "next/link";
import { compareDesc } from "date-fns";
import { allPosts } from "contentlayer/generated";

export default function Header() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  const categories = Array.from(
    new Set(posts.flatMap((post) => post.categories))
  );

  return (
    <header className="mx-auto max-w-3xl flex flex-col items-center gap-8">
      <Link href="/" className="text-center">
        <Image
          src="/images/logos/na-now-news.svg"
          alt="Na Now News Illustration"
          width={320}
          height={240}
          priority
        />
      </Link>
      <h1 className="text-2xl sm:text-3xl text-center font-judul">
        <span className="text-green-now dark:text-yellow-now">Na</span>{" "}
        <span className="text-yellow-now dark:text-green-now">Now</span>{" "}
        <span className="text-green-now dark:text-yellow-now">News</span> of{" "}
        <span className="text-yellow-now dark:text-green-now">BANANOW</span>.
        <span className="text-green-now dark:text-yellow-now">LAND</span>
      </h1>
      <div className="flex flex-wrap gap-2 justify-center">
        {categories.map((category) => (
          <Link
            key={category}
            href={`/category/${category.toLowerCase()}`}
            className="bg-dark-now dark:bg-light-now text-light-now dark:text-dark-now px-4 py-1 rounded-full text-xs sm:text-sm hover:bg-yellow-now dark:hover:bg-green-now focus:bg-green-now dark:focus:bg-yellow-now hover:text-dark-now dark:hover:text-light-now focus:text-light-now dark:focus:text-dark-now"
          >
            {category}
          </Link>
        ))}
      </div>
    </header>
  );
}
