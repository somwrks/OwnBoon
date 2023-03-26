import "../styles/globals.css";
import type { AppProps } from "next/app";
import '@fortawesome/fontawesome-svg-core/styles.css'
import Head from "next/head";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="OwnBoon is a self-improvement and productivity platform that empowers individuals to reach their full potential. Our mission is to make the impossible possible, by providing users with the tools and resources they need to unlock their fears, rise above challenges, and achieve their goals."
        />
        <meta charSet="UTF-8" />
        <meta
          name="keywords"
          content="ownboon,Ownboon, Ownboon Company, Ownboon company, Ownboon Self Improvement, OwnBoon productivity, OwnBoon Self Improvement, OwnBoon, ownboon self improvement,ownboon company, ownboon self development, ownboon productivity, ownboon linkedin, ownboon github, OwnBoon linkedin, Ownboon github, Ownboon Github, Ownboon LinkedIn, Ownboon Productivity, OwnBoon Som, Ownboon som"
        />
        <meta name="author" content="OwnBoon" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
      <ToastContainer />

    </>
  );
}

export default MyApp;
