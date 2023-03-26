import type { NextPage } from "next";
import Head from "next/head";
import {Balls, Skateboard} from "../components/ext"
import Navbar from "../components/Navbar"
import Hero from "../components/Home/Hero"
import Body from "../components/Home/Body"
import Benefits from "../components/Home/Benefits"
import Preview from "../components/Preview";
const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>OwnBoon</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Navbar/>
      <div className="mx-auto my-auto">
        <Preview/>
      <Balls/>
      <Hero/>
      <Skateboard/>
      <Body/>
      <Benefits/>
      </div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.4/flowbite.min.js"></script>    
  </>
  );
};

export default Home;


