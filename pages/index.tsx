import type { NextPage } from "next";
import Head from "next/head";
import { faLinkedin, faGithub,faInstagam } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>OwnBoon</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <main className=" justify-center text-center flex flex-col">
        <h1 className="text-9xl text-white font-title">
          Own<span className="text-[#00b6b6]">Boon</span>{" "}
        </h1>
        <h2 className="text-white text-2xl font-tag">Rise High With Ownboon</h2>
      </main>
      <div className="container  flex flex-wrap flex-col  text-center ">
        <span className="text-[40px] font-semibold  animate-character">
          Coming Soon.
        </span>
      </div>
     
      <main className="container text-center p-5 flex flex-col justify-center">
        <p className="text-white font-semibold text-lg leading-loose">
          OwnBoon is a self-improvement and productivity platform <br /> that
          empowers individuals to reach their full potential. <br />
          Stay Tuned.
        </p>
      </main>
      <main className="flex-row flex items-center  justify-center">
        <a className="social-link" href="https://www.linkedin.com/company/ownboon">
        <FontAwesomeIcon className="social-icons" icon={faLinkedin}  />
        </a>
        <a className="social-link" href="https://github.com/OwnBoon">
        <FontAwesomeIcon className="social-icons"icon={faGithub} />
        </a>
        <a className="social-link" href="https://instagram.com/OwnBoon">
        <FontAwesomeIcon className="social-icons"icon={faInstagam} />
        </a>
      </main>
      <footer className="flex fixed bottom-0 h-24 w-full items-center text-white justify-center border-t">
        ©️OwnBoon 2023
      </footer>
    </div>
  );
};

export default Home;
