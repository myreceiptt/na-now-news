import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import PostList from "@/app/components/postlist";
import Pagination from "@/app/components/pagination";

const POSTS_PER_PAGE = 4;

export default function HomePage() {
  const sortedPosts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );
  const totalPosts = sortedPosts.length;
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);

  return (
    <div className="flex flex-col gap-8 p-4 pb-20 sm:p-20">
      <Header />
      <main className="mx-auto max-w-3xl flex flex-col border-b border-dark-now dark:border-light-now">
        <PostList posts={sortedPosts.slice(0, POSTS_PER_PAGE)} />
        <h5 className="text-sm sm:text-base text-right mt-4">
          Let&apos;s dig into all the pages!
        </h5>
        <Pagination currentPage={1} totalPages={totalPages} basePath="./" />
      </main>
      <Footer />
    </div>
  );
}
