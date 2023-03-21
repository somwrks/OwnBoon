import type { NextPage } from "next";
import Head from "next/head";
import {Balls, Skateboard} from "../components/ext"
import Navbar from "../components/navbar"
import Hero from "../components/Hero"
const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>OwnBoon</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Navbar/>
      <div className="mx-auto my-auto">
      <Balls/>
      <Hero/>
      <Skateboard/>
      </div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.4/flowbite.min.js"></script>    
  </>
  );
};

export default Home;
