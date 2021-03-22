import { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <div className={"mx-auto my-8 w-9/12"}>
      <header>
        <h1 className={"text-6xl font-bold text-center"}>My Blog</h1>
        <nav className={"my-4"}>
          <ul className={"flex flex-row justify-center space-x-4"}>
            <li className={router.pathname === "/" ? "active" : ""}>
              <Link href={"/"}>
                <a>Home</a>
              </Link>
            </li>
            <li className={router.pathname === "/about" ? "active" : ""}>
              <Link href={"/about"}>
                <a>About</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
