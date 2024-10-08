import Image from "next/image";
import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";

// Define an interface for your post object
interface Post {
  _id: string;
  url: string;
  gambar: string;
  title: string;
  date: string;
  description: string;
  categories: string[];
}

export default function PostList({ posts }: { posts: Post[] }) {
  const sortedPosts = posts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <ul className="border-b border-dark-now dark:border-light-now">
      {sortedPosts.map((post) => (
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
  );
}
