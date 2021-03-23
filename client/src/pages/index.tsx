import Head from "next/head";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import { getAllPosts } from "../lib/data";

const Home = ({ posts }: any) => {
  return (
    <div>
      <Head>
        <title>My Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        {posts.map((item: any) => (
          <div key={item.slug} className={"card"}>
            <div>
              <Link href={`/blog/${item.slug}`}>
                <a>{item.title}</a>
              </Link>
            </div>
            <div className={"text-gray-600 text-xs"}>
              {format(parseISO(item.date), "MMMM do, uuu")}
            </div>
            <div className={"text-sm"}>{item.content.substr(0, 150)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts.map((post) => {
        return {
          title: post.data.title,
          date: post.data.date.toISOString(),
          content: post.content,
          slug: post.slug,
        };
      }),
    },
  };
}
