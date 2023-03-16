import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return <div>
    <Head>
      <meta
        name="description"
        content="OwnBoon is a self-improvement and productivity platform that empowers individuals to reach their full potential. Our mission is to make the impossible possible, by providing users with the tools and resources they need to unlock their fears, rise above challenges, and achieve their goals. "
      />
      <meta name="google-site-verification" content="sH-4DEIqj8Wyf0clY3cNFT-lEsKTw4E6cd6peNAAR5c" />
      <meta charSet="UTF-8" />
      <meta
        name="keywords"
        content="ownboon, ownboon self improvement, ownboon self development, ownboon productivity, ownboon linkedin, ownboon github"
      />
      <meta name="author" content="OwnBoon" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <Component {...pageProps} />
  </div>;
}

export default MyApp;
