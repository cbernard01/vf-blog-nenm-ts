import Head from "next/head";
import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";

import { getAllPosts } from "../../lib/data";
import { format, parseISO } from "date-fns";

const Blog = ({ title, date, content }: any) => {
  const hydratedContent = hydrate(content);
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <main>
        <div className={"blog-header"}>
          <h1 className={"blog-title"}>{title}</h1>
          <div className={"text-gray-600 text-sm"}>
            {format(parseISO(date), "MMMM do, uuu")}
          </div>
        </div>
        <p className={"blog-content"}>{hydratedContent}</p>
      </main>
    </div>
  );
};

export default Blog;

export async function getStaticProps(context: any) {
  const { params } = context;
  const allPosts = getAllPosts();
  const content = allPosts.find((post) => post.slug === params.slug);

  const mdxSource =
    content && content.content ? await renderToString(content.content) : "";

  return {
    props: content
      ? {
          title: content.data.title,
          date: content.data.date.toISOString(),
          content: mdxSource,
        }
      : { title: "", date: new Date().toISOString(), content: "" },
  };
}

export async function getStaticPaths() {
  const allPosts = getAllPosts();

  return {
    paths: allPosts.map((post) => ({
      params: { slug: post.slug },
    })),
    fallback: false,
  };
}
