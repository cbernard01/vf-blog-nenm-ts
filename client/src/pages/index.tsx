import Head from "next/head";
import Link from "next/link";
import { format, parseISO } from "date-fns";

import { blogPosts } from "../lib/data";

const Home = () => {
  return (
    <div>
      <Head>
        <title>My Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        {blogPosts.map((item) => (
          <div key={item.slug} className={"card"}>
            <div>
              <Link href={`/blog/${item.slug}`}>
                <a>{item.title}</a>
              </Link>
            </div>
            <div className={"text-gray-600 text-xs"}>
              {format(parseISO(item.date), "MMMM do, uuu")}
            </div>
            <div>{item.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
