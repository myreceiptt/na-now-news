import Image from "next/image";
import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

export default function HomePage() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <div className="flex flex-col gap-8 p-4 pb-20 sm:p-20">
      <Header />
      <main className="mx-auto max-w-3xl flex flex-col items-center gap-8">
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
