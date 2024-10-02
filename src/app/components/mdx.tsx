import * as React from "react";
import Image from "next/image";
import { useMDXComponent } from "next-contentlayer/hooks";
import YouTube from "./youtube";
import CustomLink from "./customlink";

function clsx(...args: (string | boolean | undefined | null)[]): string {
  // function clsx(...args: any) {
  return args.filter(Boolean).join(" ");
}

const components = {
  strong: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <strong
      className={clsx("text-green-now dark:text-yellow-now", className)}
      {...props}
    />
  ),
  em: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <em
      className={clsx(
        "not-italic font-bold text-yellow-now dark:text-green-now",
        className
      )}
      {...props}
    />
  ),
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <h1
      className={clsx(
        "[&:not(:first-child)]:mt-4 text-3xl sm:text-4xl font-judul",
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <h2
      className={clsx(
        "[&:not(:first-child)]:mt-4 text-2xl sm:text-3xl font-judul",
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <h3
      className={clsx(
        "[&:not(:first-child)]:mt-4 text-2xl font-judul",
        className
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <h4
      className={clsx(
        "[&:not(:first-child)]:mt-4 text-lg sm:text-xl font-judul",
        className
      )}
      {...props}
    />
  ),
  h5: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <h5
      className={clsx(
        "[&:not(:first-child)]:mt-4 text-base sm:text-lg font-judul",
        className
      )}
      {...props}
    />
  ),
  h6: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <h6
      className={clsx(
        "[&:not(:first-child)]:mt-4 text-sm sm:text-base font-judul",
        className
      )}
      {...props}
    />
  ),
  a: ({
    href,
    children,
    className,
    ...props
  }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    if (!href) {
      // Handle the case where href is missing (you can log an error or use a default)
      console.error("Missing href in anchor tag");
      return <span className={className}>{children}</span>; // Fallback behavior (you can choose how to handle it)
    }

    return (
      <CustomLink href={href} className={className} {...props}>
        {children}
      </CustomLink>
    );
  },
  p: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <p
      className={clsx(
        "[&:not(:first-child)]:mt-2 text-sm sm:text-base",
        className
      )}
      {...props}
    />
  ),
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <ul
      className={clsx(
        "list-inside [&:not(:first-child)]:mt-2 list-disc",
        className
      )}
      {...props}
    />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <ol
      className={clsx(
        "list-inside [&:not(:first-child)]:mt-2 list-decimal",
        className
      )}
      {...props}
    />
  ),
  li: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <li className={clsx("text-sm sm:text-base", className)} {...props} />
  ),
  blockquote: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
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
    width = 768, // Default value for width
    height = 256, // Default value for height
    src = "/image/posts/the-fruit-that-connects-us.jpg", // Fallback src in case it's undefined
    alt = "Please eat some fruit that can connects us!", // Fallback src in case it's undefined
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => {
    const safeWidth =
      typeof width === "number" ? width : parseInt(width as string, 10);
    const safeHeight =
      typeof height === "number" ? height : parseInt(height as string, 10);
    return (
      <span>
        <span>
          <Image
            priority
            src={src}
            alt={alt}
            width={safeWidth}
            height={safeHeight}
            className={clsx(
              "rounded-md aspect-[4/3] w-full h-full object-cover object-center hover:scale-105 transition-all ease duration-300",
              className
            )}
            {...props}
          />
        </span>
      </span>
    );
  },
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
