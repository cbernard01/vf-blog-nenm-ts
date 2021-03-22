import Head from "next/head";
import { blogPosts } from "../../lib/data";

const Blog = ({ title, date, content }: any) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <main>
        <h1>{title}</h1>
        <h2>{date}</h2>
        <p>{content}</p>
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
