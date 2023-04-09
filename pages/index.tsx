import type { NextPage } from "next";
import Head from "next/head";
import { Balls, Skateboard } from "../components/ext";
import Navbar from "../components/Navbar";
import Hero from "../components/Home/Hero";
import Body from "../components/Home/Body";
import Benefits from "../components/Home/Benefits";
import Reviews from "../components/Home/Reviews";
import Preview from "../components/Preview";
import Footer from "../components/Footer";
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>OwnBoon</title>
        <link rel="icon" href="/logo.png" />
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
      <Navbar />
      <div className="mx-auto my-auto">
        <Preview />
        <Balls />
        <Hero />
        <Skateboard />
        <Body />
        <Benefits />
        <Reviews />
        <Footer/>
      </div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.4/flowbite.min.js"></script>
    </>
  );
};

export default Home;
