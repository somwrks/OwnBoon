import "../styles/globals.css";
import type { AppProps } from "next/app";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../components/Loader";
import WaitingLinePopup from "../components/WaitingLinePopup";
import NextNProgress from "nextjs-progressbar";
import { ToastContainer } from "react-toastify";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { AppProvider } from "../components/AppProvider";
import Head from "next/head";
function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => {
      setIsLoading(true);
    };

    const handleComplete = () => {
      setIsLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);
  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="sH-4DEIqj8Wyf0clY3cNFT-lEsKTw4E6cd6peNAAR5c"
        />
        <meta charSet="UTF-8" />
        <meta
          name="keywords"
          content="ownboon,ownboon company, ownboon health, ownboon fitness, ownboon books, ownboon tricks, ownboon habits, ownboon help, ownboon vent, ownboon explore, ownboon self improvement, ownboon self development, ownboon productivity, ownboon linkedin, ownboon github"
        />
        <meta
          name="google-site-verification"
          content="0t6s_w9kPQXYMPIHrGcpSUmYI-iaO06XJBpkMDGHdrc"
        />
        <meta name="author" content="OwnBoon" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <AppProvider>
        <NextNProgress
          color="#29D"
          startPosition={0.3}
          stopDelayMs={200}
          height={2}
        />
        {isLoading && <Loader />}
        <Component {...pageProps} />
        <WaitingLinePopup />
        <ToastContainer
          style={{ marginTop: "60px" }}
          position="top-center"
          autoClose={3000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </AppProvider>
    </>
  );
}

export default MyApp;
