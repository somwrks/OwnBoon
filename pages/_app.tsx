import "../styles/globals.css";
import type { AppProps } from "next/app";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "react-toastify/dist/ReactToastify.css";
import Loader from '../components/Loader';
import NextNProgress from 'nextjs-progressbar';
import { ToastContainer } from "react-toastify";
import { useState, useEffect } from 'react';
import Preview from "../components/Preview";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <NextNProgress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={2}
      />
       <Preview />
      <Component {...pageProps} />
      <ToastContainer />
      
    </>
  );
}

export default MyApp;
