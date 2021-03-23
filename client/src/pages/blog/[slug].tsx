import Head from "next/head";
import { blogPosts } from "../../lib/data";
import { format, parseISO } from "date-fns";

const Blog = ({ title, date, content }: any) => {
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
        <p className={"blog-content"}>{content}</p>
      </main>
    </div>
  );
};

export default Blog;

export async function getStaticProps(context: any) {
  const { params } = context;

  return {
    props: blogPosts.find((item) => item.slug === params.slug),
  };
}

export async function getStaticPaths() {
  return {
    paths: blogPosts.map((item) => ({
      params: { slug: item.slug },
    })),
    fallback: false,
  };
}
