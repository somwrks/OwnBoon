import "../styles/globals.css";
import type { AppProps } from "next/app";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "react-toastify/dist/ReactToastify.css";
import Loader from '../components/Loader';
import NextNProgress from 'nextjs-progressbar';
import { ToastContainer } from "react-toastify";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Preview from "../components/Preview";


function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {

    const handleStart = () => {
      setIsLoading(true);
    };

    const handleComplete = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);
  return (
    <>
    <NextNProgress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={2}
      />
       {isLoading && <Loader />}
       <Preview />
      <Component {...pageProps} />
      <ToastContainer />
      
    </>
  );
}

export default MyApp;
