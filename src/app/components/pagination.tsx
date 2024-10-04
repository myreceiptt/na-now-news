import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath: string;
}

export default function Pagination({
  currentPage,
  totalPages,
  basePath,
}: PaginationProps) {
  return (
    <div className="mt-2 flex flex-wrap justify-end gap-2 mb-8">
      {currentPage > 1 && (
        <Link
          href={`${basePath}${
            currentPage - 1 === 1 ? "" : `${currentPage - 1}`
          }`}
          className="bg-dark-now dark:bg-light-now text-light-now dark:text-dark-now px-4 py-1 rounded-full text-xs sm:text-sm hover:bg-yellow-now dark:hover:bg-green-now focus:bg-green-now dark:focus:bg-yellow-now hover:text-dark-now dark:hover:text-light-now focus:text-light-now dark:focus:text-dark-now"
          aria-label="Go to previous page"
        >
          Previous
        </Link>
      )}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <Link
          key={page}
          href={`${basePath}${page === 1 ? "" : `${page}`}`}
          className={`text-light-now dark:text-dark-now px-4 py-1 rounded-full text-xs sm:text-sm hover:bg-yellow-now dark:hover:bg-green-now hover:text-dark-now dark:hover:text-light-now ${
            currentPage === page
              ? "bg-green-now dark:bg-yellow-now"
              : "bg-dark-now dark:bg-light-now focus:bg-green-now dark:focus:bg-yellow-now focus:text-light-now dark:focus:text-dark-now"
          }`}
          aria-current={currentPage === page ? "page" : undefined}
        >
          {page}
        </Link>
      ))}
      {currentPage < totalPages && (
        <Link
          href={`${basePath}${currentPage + 1}`}
          className="bg-dark-now dark:bg-light-now text-light-now dark:text-dark-now px-4 py-1 rounded-full text-xs sm:text-sm hover:bg-yellow-now dark:hover:bg-green-now focus:bg-green-now dark:focus:bg-yellow-now hover:text-dark-now dark:hover:text-light-now focus:text-light-now dark:focus:text-dark-now"
          aria-label="Go to next page"
        >
          Next
        </Link>
      )}
    </div>
  );
}
