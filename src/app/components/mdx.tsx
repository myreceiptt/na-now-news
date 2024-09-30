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
      className={clsx("[&:not(:first-child)]:mt-2 text-sm sm:text-base", className)}
      {...props}
    />
  ),
  ul: ({ className, ...props }) => (
    <ul className={clsx("list-inside [&:not(:first-child)]:mt-2 list-disc", className)} {...props} />
  ),
  ol: ({ className, ...props }) => (
    <ol className={clsx("list-inside [&:not(:first-child)]:mt-2 list-decimal", className)} {...props} />
  ),
  li: ({ className, ...props }) => (
    <li className={clsx("", className)} {...props} />
  ),
  blockquote: ({ className, ...props }) => (
    <blockquote
      className={clsx(
        "mt-4 border-l-2 border-zinc-300 pl-6 italic text-zinc-800 [&>*]:text-zinc-600",
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
        <img className={clsx("rounded-md", className)} alt={alt} {...props} />
      </span>
    </span>
  ),

  hr: ({ ...props }) => (
    <hr className="my-4 border-zinc-200 md:my-8" {...props} />
  ),
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="w-full my-6 overflow-y-auto">
      <table className={clsx("w-full", className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={clsx(
        "m-0 border-t border-zinc-300 p-0 even:bg-zinc-100",
        className
      )}
      {...props}
    />
  ),
  th: ({ className, ...props }) => (
    <th
      className={clsx(
        "border border-zinc-200 px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }) => (
    <td
      className={clsx(
        "border border-zinc-200 px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  pre: ({ className, ...props }) => (
    <pre
      className={clsx(
        "mt-6 mb-4 overflow-x-auto rounded-lg bg-zinc-900 py-4",
        className
      )}
      {...props}
    />
  ),
  code: ({ className, ...props }) => (
    <code
      className={clsx(
        "relative rounded border bg-zinc-300 bg-opacity-25 py-[0.2rem] px-[0.3rem] font-mono text-sm text-zinc-600",
        className
      )}
      {...props}
    />
  ),
  Image,
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
