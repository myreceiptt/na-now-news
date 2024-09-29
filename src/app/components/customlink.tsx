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

  return <a target="_blank" {...props} />;
}
