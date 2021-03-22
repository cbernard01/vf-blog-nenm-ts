import { AppProps } from "next/app";
import Link from "next/link";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <nav>
        <ul>
          <Link href={"/"}>
            <li>Home</li>
          </Link>
          <Link href={"/about"}>
            <li>About</li>
          </Link>
        </ul>
      </nav>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
