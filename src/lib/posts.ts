import fs from "node:fs";
import path from "node:path";
import { cache } from "react";
import matter from "gray-matter";

export type Post = {
  _id: string;
  url: string;
  slug: string;
  title: string;
  date: string;
  description: string;
  categories: string[];
  gambar: string;
  penulis: string;
  link?: string;
  body: string;
};

const postsDir = path.join(process.cwd(), "posts");

const normalizeStringArray = (value: unknown): string[] => {
  if (Array.isArray(value)) {
    return value.filter((item) => typeof item === "string") as string[];
  }
  if (typeof value === "string") {
    return [value];
  }
  return [];
};

const normalizeDate = (value: unknown): string => {
  if (typeof value === "string") {
    return value;
  }
  if (value instanceof Date) {
    return value.toISOString();
  }
  return "";
};

export const getAllPosts = cache((): Post[] => {
  if (!fs.existsSync(postsDir)) {
    return [];
  }

  const files = fs
    .readdirSync(postsDir)
    .filter((file) => file.endsWith(".mdx"));

  return files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(postsDir, file), "utf8");
    const { data, content } = matter(raw);

    return {
      _id: slug,
      slug,
      url: `/posts/${slug}`,
      title: typeof data.title === "string" ? data.title : "",
      date: normalizeDate(data.date),
      description: typeof data.description === "string" ? data.description : "",
      categories: normalizeStringArray(data.categories),
      gambar: typeof data.gambar === "string" ? data.gambar : "",
      penulis: typeof data.penulis === "string" ? data.penulis : "",
      link: typeof data.link === "string" ? data.link : undefined,
      body: content,
    };
  });
});

export const getPostBySlug = cache((slug: string): Post | undefined => {
  return getAllPosts().find((post) => post.slug === slug);
});
