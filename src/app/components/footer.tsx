import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mx-auto max-w3xl flex flex-col items-center">
      <h3 className="text-center text-lg sm:text-xl font-judul mb-2">
        Want to partner and do B2B with us?
      </h3>
      <div className="flex gap-2 flex-wrap justify-center mb-4">
        <a
          className="rounded-full flex items-center justify-center gap-2 text-xs sm:text-sm py-2 px-5 bg-dark-now dark:bg-light-now text-light-now dark:text-dark-now hover:bg-yellow-now dark:hover:bg-green-now focus:bg-green-now dark:focus:bg-yellow-now hover:text-dark-now dark:hover:text-light-now focus:text-light-now dark:focus:text-dark-now"
          href="https://heads.bananow.land/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/favicon/favicon-32x32.png"
            alt="BANANOW logomark"
            width={20}
            height={20}
          />
          Be a Head
        </a>
        <a
          className="rounded-full flex items-center justify-center gap-2 text-xs sm:text-sm py-2 px-5 bg-dark-now dark:bg-light-now text-light-now dark:text-dark-now hover:bg-yellow-now dark:hover:bg-green-now focus:bg-green-now dark:focus:bg-yellow-now hover:text-dark-now dark:hover:text-light-now focus:text-light-now dark:focus:text-dark-now"
          href="https://news.bananow.land/partnerhip"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/favicon/favicon-32x32.png"
            alt="BANANOW logomark"
            width={20}
            height={20}
          />
          Fill a Form
        </a>
      </div>
      <div className="flex gap-2 flex-wrap justify-center mb-2 text-xs sm:text-sm">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.bananow.land/"
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
          About Us
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://gp.bananow.land/"
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
          Green Print
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.bananow.land/privacy"
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
          Our Policy
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.bananow.land/terms"
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
          Our Terms
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.bananow.land/#embassy"
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
          Contact Us
        </a>
      </div>
      <div className="text-center text-sm sm:text-base">
        <Link href="/" className="hover:underline hover:underline-offset-4">
          <span className="text-green-now dark:text-yellow-now font-bold">
            BANANOW
          </span>
          .
          <span className="text-yellow-now dark:text-green-now font-bold">
            LAND
          </span>{" "}
          &copy; Copyright {new Date().getFullYear()}. All Rights Reserved.
        </Link>
      </div>
    </footer>
  );
}
