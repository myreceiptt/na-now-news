import Link from "next/link";
import { HTMLProps } from "react";

export default function CustomLink(
  props: { href: string } & HTMLProps<HTMLAnchorElement>
) {
  // export default function CustomLink(props: { href: string; children: React.ReactNode }) {

  const href = props.href;
  const isInternalLink = href && href.startsWith("/");
  const isImageLink = href && href.startsWith("/images");

  if (isInternalLink && !isImageLink) {
    return <Link href={href}>{props.children}</Link>;
  }

  return (
    <a
      target="_blank"
      className="text-green-now dark:text-yellow-now hover:text-yellow-now dark:hover:text-green-now underline underline-offset-4"
      {...props}
    />
  );
}
