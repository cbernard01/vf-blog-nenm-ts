import fs from "fs";
import path from "path";

import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "_content");

export function getAllPosts() {
  const allPosts = fs.readdirSync(contentDirectory);

  return allPosts.map((fileName) => {
    const slug = fileName.replace(".md", "");

    const fileContents = fs.readFileSync(
      path.join(contentDirectory, fileName),
      "utf8"
    );

    const { data, content } = matter(fileContents);
    4;

    return { data, content, slug };
  });
}

export const blogPosts = [
  {
    title: "my first post",
    slug: "first",
    date: new Date().toISOString(),
    content:
      "Ubi est secundus historia? Decor, cotta, et planeta. Vae. Omnias studere in bi-color aboa! Barcass volare, tanquam clemens habena.",
  },
  {
    title: "my second post",
    slug: "second",
    date: new Date().toISOString(),
    content:
      "Ubi est secundus historia? Decor, cotta, et planeta. Vae. Omnias studere in bi-color aboa! Barcass volare, tanquam clemens habena.",
  },
  {
    title: "my third post",
    slug: "third",
    date: new Date().toISOString(),
    content:
      "Ubi est secundus historia? Decor, cotta, et planeta. Vae. Omnias studere in bi-color aboa! Barcass volare, tanquam clemens habena.",
  },
];
