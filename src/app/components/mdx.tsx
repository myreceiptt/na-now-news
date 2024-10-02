// @ts-nocheck
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { useMDXComponent } from "next-contentlayer/hooks";
import YouTube from "./youtube";
import CustomLink from "./customlink";

function clsx(...args: (string | boolean | undefined | null)[]): string {
  // function clsx(...args: any) {
  return args.filter(Boolean).join(" ");
}

const components = {
  strong: ({ className, ...props }) => (
    <strong className={clsx("text-green-now dark:text-yellow-now", className)} {...props} />
  ),
  em: ({ className, ...props }) => (
    <em className={clsx("not-italic font-bold text-yellow-now dark:text-green-now", className)} {...props} />
  ),
  h1: ({ className, ...props }) => (
    <h1
      className={clsx(
        "[&:not(:first-child)]:mt-4 text-3xl sm:text-4xl font-judul",
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }) => (
    <h2
      className={clsx(
        "[&:not(:first-child)]:mt-4 text-2xl sm:text-3xl font-judul",
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }) => (
    <h3
      className={clsx(
        "[&:not(:first-child)]:mt-4 text-2xl font-judul",
        className
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }) => (
    <h4
      className={clsx(
        "[&:not(:first-child)]:mt-4 text-lg sm:text-xl font-judul",
        className
      )}
      {...props}
    />
  ),
  h5: ({ className, ...props }) => (
    <h5
      className={clsx(
        "[&:not(:first-child)]:mt-4 text-base sm:text-lg font-judul",
        className
      )}
      {...props}
    />
  ),
  h6: ({ className, ...props }) => (
    <h6
      className={clsx(
        "[&:not(:first-child)]:mt-4 text-sm sm:text-base font-judul",
        className
      )}
      {...props}
    />
  ),
  a: ({ className, ...props }) => (
    <Link
      className={clsx(
        "text-green-now dark:text-yellow-now hover:text-yellow-now dark:hover:text-green-now underline underline-offset-4",
        className
      )}
      {...props}
    />
  ),
  a: CustomLink,
  p: ({ className, ...props }) => (
    <p
      className={clsx(
        "[&:not(:first-child)]:mt-2 text-sm sm:text-base",
        className
      )}
      {...props}
    />
  ),
  ul: ({ className, ...props }) => (
    <ul
      className={clsx(
        "list-inside [&:not(:first-child)]:mt-2 list-disc",
        className
      )}
      {...props}
    />
  ),
  ol: ({ className, ...props }) => (
    <ol
      className={clsx(
        "list-inside [&:not(:first-child)]:mt-2 list-decimal",
        className
      )}
      {...props}
    />
  ),
  li: ({ className, ...props }) => (
    <li className={clsx("text-sm sm:text-base", className)} {...props} />
  ),
  blockquote: ({ className, ...props }) => (
    <blockquote
      className={clsx(
        "[&:not(:first-child)]:mt-4 [&:not(:last-child)]:mb-4 py-4 bg-yellow-now dark:bg-green-now rounded-md border-l-4 border-green-now dark:border-yellow-now pl-4 italic text-dark-now dark:text-light-now",
        className
      )}
      {...props}
    />
  ),
  img: ({
    className,
    alt,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <span>
      <span>
        <Image
          priority
          width={768}
          height={256}
          className={clsx("rounded-md aspect-[4/3] w-full h-full object-cover object-center hover:scale-105 transition-all ease duration-300", className)}
          alt={alt}
          {...props}
        />
      </span>
    </span>
  ),
  hr: ({ ...props }) => (
    <hr
      className="[&:not(:first-child)]:mt-4 border-dark-now dark:border-light-now"
      {...props}
    />
  ),
  YouTube,
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <div className="mdx">
      <Component components={components} />
    </div>
  );
}
