import Link from "next/link";
import { HTMLProps } from "react";

export default function CustomLink(
  props: { href?: string } & HTMLProps<HTMLAnchorElement> // Make href optional
) {
  const { href, children, ...rest } = props;

  if (!href) {
    console.error("Missing href in CustomLink");
    return <span {...rest}>{children}</span>; // Fallback if href is missing
  }

  const isInternalLink = href.startsWith("/");
  const isImageLink = href.startsWith("/images");

  if (isInternalLink && !isImageLink) {
    return (
      <Link
        href={href}
        className="text-green-now dark:text-yellow-now hover:text-yellow-now dark:hover:text-green-now underline underline-offset-4"
      >
        {children}
      </Link>
    );
  }

  return (
    <Link
      target="_blank"
      className="text-green-now dark:text-yellow-now hover:text-yellow-now dark:hover:text-green-now underline underline-offset-4"
      href={href} // Add href to the anchor tag
    >
      {children}
    </Link>
  );
}
